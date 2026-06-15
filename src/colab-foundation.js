export const COLAB_FOUNDATION_VERSION = "2026-06-13-colab-foundation-v1";

export const COLAB_PROVIDER_IDS = Object.freeze({
  GOOGLE_DRIVE: "google-drive",
  DROPBOX: "dropbox",
  TOOLGRID_NATIVE: "toolgrid-native"
});

export const COLAB_ROLES = Object.freeze({
  VIEWER: "viewer",
  COMMENTER: "commenter",
  EDITOR: "editor",
  OWNER: "owner"
});

export const COLAB_PROVIDER_PLANS = [
  {
    id: COLAB_PROVIDER_IDS.GOOGLE_DRIVE,
    name: "Google Drive",
    status: "api-ready",
    freeToStart: true,
    developerCost: "Standard Drive API use is available at no additional cost within quotas; future over-quota charges are planned by Google.",
    userCost: "Uses each user's Google account and Drive storage quota.",
    bestFor: ["Docs", "Sheets", "PDFs", "folders", "Google-account teams"],
    capabilities: ["oauth", "file-picker", "folder-sync", "shared-links", "permission-invites", "project-artifact-save"],
    suggestedScopes: [
      "https://www.googleapis.com/auth/drive.file",
      "https://www.googleapis.com/auth/drive.metadata.readonly"
    ],
    approvalNotes: "Public apps need OAuth consent setup and may need Google verification depending on scopes and audience.",
    storageOwner: "User's Google Drive",
    launchRecommendation: "Best first cloud connector because many users already have Google accounts and Drive folders."
  },
  {
    id: COLAB_PROVIDER_IDS.DROPBOX,
    name: "Dropbox",
    status: "api-ready",
    freeToStart: true,
    developerCost: "Dropbox's DBX Platform can be integrated with an app account; rate limits and production approval rules still apply.",
    userCost: "Uses each user's Dropbox account and Dropbox storage quota.",
    bestFor: ["File folders", "client uploads", "media files", "shared links", "non-Google users"],
    capabilities: ["oauth", "chooser", "saver", "shared-links", "file-requests", "project-artifact-save"],
    suggestedScopes: ["files.metadata.read", "files.content.read", "files.content.write", "sharing.write"],
    approvalNotes: "Development apps start limited; production approval is needed before broad public rollout.",
    storageOwner: "User's Dropbox",
    launchRecommendation: "Good second connector after Google Drive, especially for file request and client-file intake workflows."
  },
  {
    id: COLAB_PROVIDER_IDS.TOOLGRID_NATIVE,
    name: "ToolGrid shared workspace",
    status: "backend-needed",
    freeToStart: true,
    developerCost: "Can start with local browser mock data; real sharing needs a backend, database, auth, file storage, and security rules.",
    userCost: "Free or paid depending on the storage/traffic limits you choose.",
    bestFor: ["Invites", "project roles", "account-to-account sharing", "workspace comments", "tool artifacts"],
    capabilities: ["project-invites", "roles", "comments", "artifact-sharing", "activity-log", "workspace-permissions"],
    suggestedScopes: [],
    approvalNotes: "Requires ToolGrid accounts and a server-side permission model before real private file sharing.",
    storageOwner: "ToolGrid app storage or connected cloud provider",
    launchRecommendation: "Best long-term collaboration system because it lets multiple users work inside the same ToolGrid project."
  }
];

export const COLAB_SECURITY_CHECKLIST = [
  "Use OAuth; never ask users for Google or Dropbox passwords.",
  "Request the smallest file scopes possible, starting with app-created files/folders when feasible.",
  "Store OAuth tokens server-side with encryption; do not store permanent tokens in localStorage in production.",
  "Keep a project permission table: owner, editor, commenter, viewer.",
  "Log every share, invite, upload, delete, export, and permission change.",
  "Show users which provider owns storage and which files are being shared before connecting tools.",
  "Scan uploads with size/type limits before letting tools process them.",
  "Create per-project folders so project artifacts and uploads stay organized."
];

function slugify(value) {
  return String(value || "project")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 64) || "project";
}

function makeId(prefix) {
  const random = Math.random().toString(36).slice(2, 8);
  return `${prefix}-${Date.now().toString(36)}-${random}`;
}

export function getProviderById(providerId) {
  return COLAB_PROVIDER_PLANS.find((provider) => provider.id === providerId) || COLAB_PROVIDER_PLANS[0];
}

export function summarizeProviderCost(providerId) {
  const provider = getProviderById(providerId);
  return `${provider.name}: ${provider.developerCost} ${provider.userCost}`;
}

export function buildCloudConnectorPlan({ providerId, projectName = "ToolGrid Project", redirectUri = "https://your-domain.com/auth/callback" } = {}) {
  const provider = getProviderById(providerId);
  const folderName = `ToolGrid/${slugify(projectName)}`;
  const steps = [
    `Create or configure the ${provider.name} developer app.`,
    `Set the redirect URI to ${redirectUri}.`,
    provider.suggestedScopes.length ? `Request minimal scopes: ${provider.suggestedScopes.join(", ")}.` : "Use ToolGrid account permissions instead of cloud scopes.",
    `Create a project folder path: ${folderName}.`,
    "Save uploaded files, generated artifacts, and workflow exports into that project folder.",
    "Mirror share permissions into ToolGrid roles so the waterfall panel knows who can view, edit, or approve each task."
  ];
  return {
    providerId: provider.id,
    providerName: provider.name,
    freeToStart: provider.freeToStart,
    folderName,
    redirectUri,
    suggestedScopes: provider.suggestedScopes,
    capabilities: provider.capabilities,
    steps,
    warning: provider.approvalNotes
  };
}

export function createDefaultCollabState() {
  return {
    version: COLAB_FOUNDATION_VERSION,
    activeProviderId: COLAB_PROVIDER_IDS.GOOGLE_DRIVE,
    connectedProviders: [],
    shareSpaces: [],
    activeShareSpaceId: "",
    invites: [],
    activity: [],
    setupPlan: buildCloudConnectorPlan({ providerId: COLAB_PROVIDER_IDS.GOOGLE_DRIVE, projectName: "ToolGrid Project" })
  };
}

export function createShareSpace({ project, name, providerId = COLAB_PROVIDER_IDS.TOOLGRID_NATIVE, ownerEmail = "owner@example.com" } = {}) {
  const projectName = project?.name || name || "Shared Project";
  const provider = getProviderById(providerId);
  return {
    id: makeId("share"),
    name: name || `${projectName} Colab`,
    providerId: provider.id,
    providerName: provider.name,
    projectId: project?.id || "custom-project",
    projectName,
    folderSlug: slugify(projectName),
    members: [
      {
        email: ownerEmail,
        role: COLAB_ROLES.OWNER,
        status: "active",
        joinedAt: new Date().toISOString()
      }
    ],
    files: [],
    artifacts: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
}

export function validateInviteEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || "").trim());
}

export function createInvite({ shareSpaceId, projectName = "ToolGrid project", email, role = COLAB_ROLES.VIEWER, message = "" } = {}) {
  if (!validateInviteEmail(email)) {
    throw new Error("Enter a valid email address before creating an invite.");
  }
  if (!Object.values(COLAB_ROLES).includes(role)) {
    throw new Error("Invite role must be viewer, commenter, editor, or owner.");
  }
  const token = makeId("invite");
  return {
    id: token,
    shareSpaceId,
    email: email.trim().toLowerCase(),
    role,
    projectName,
    message: message.trim(),
    status: "pending",
    inviteUrl: `https://your-domain.com/colab/accept/${token}`,
    createdAt: new Date().toISOString()
  };
}

export function acceptInvite({ shareSpace, invite, acceptedEmail } = {}) {
  if (!shareSpace || !invite) return shareSpace;
  const email = String(acceptedEmail || invite.email || "").trim().toLowerCase();
  if (!validateInviteEmail(email)) return shareSpace;
  const next = {
    ...shareSpace,
    members: [...(shareSpace.members || [])],
    updatedAt: new Date().toISOString()
  };
  const existing = next.members.find((member) => member.email === email);
  if (existing) {
    existing.role = invite.role;
    existing.status = "active";
  } else {
    next.members.push({ email, role: invite.role, status: "active", joinedAt: new Date().toISOString() });
  }
  return next;
}

export function createSharedFileRecord({ file, projectId, providerId = COLAB_PROVIDER_IDS.TOOLGRID_NATIVE, uploadedBy = "local-user" } = {}) {
  return {
    id: makeId("file"),
    projectId: projectId || "custom-project",
    providerId,
    name: file?.name || "Untitled file",
    type: file?.type || "unknown",
    size: Number(file?.size || 0),
    uploadedBy,
    status: "shared",
    createdAt: new Date().toISOString()
  };
}

export function buildProjectShareBundle({ project, files = [], invites = [], providerId = COLAB_PROVIDER_IDS.TOOLGRID_NATIVE } = {}) {
  const shareSpace = createShareSpace({ project, providerId, ownerEmail: "owner@example.com" });
  shareSpace.files = files.map((file) => createSharedFileRecord({ file, projectId: shareSpace.projectId, providerId }));
  return {
    shareSpace,
    invites,
    summary: `${shareSpace.name} is ready to share with ${invites.length} invite${invites.length === 1 ? "" : "s"} and ${shareSpace.files.length} file${shareSpace.files.length === 1 ? "" : "s"}.`
  };
}

export function canShareFileBetweenAccounts({ providerId, fromRole = COLAB_ROLES.OWNER, toRole = COLAB_ROLES.VIEWER } = {}) {
  const provider = getProviderById(providerId);
  const canManage = [COLAB_ROLES.OWNER, COLAB_ROLES.EDITOR].includes(fromRole);
  const validTarget = Object.values(COLAB_ROLES).includes(toRole);
  return {
    allowed: canManage && validTarget,
    providerId: provider.id,
    providerName: provider.name,
    reason: canManage && validTarget
      ? `${provider.name} sharing can be mapped to ToolGrid roles for this project.`
      : "Only owners or editors should be able to share project files with other accounts."
  };
}
