export function sanitizeFilename(name: string, graphQlType?: string, isDashCased?: boolean): string {
  let cleanName;
  if (isDashCased) {
    name = name[0].toLowerCase() + name.substring(1);
    cleanName = name.replace(/([A-Z])/g, g => `-${g[0].toLowerCase()}`);
  } else {
    cleanName = name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
  }

  return cleanName === '' ? cleanName : `${cleanName}${graphQlType ? '.' + graphQlType : ''}`;
}
