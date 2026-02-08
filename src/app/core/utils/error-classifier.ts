export function classifyHttpError(status: number): string {
  if (status >= 500) return 'Server error occurred';
  if (status === 401) return 'Unauthorized';
  if (status === 403) return 'Forbidden';
  if (status === 404) return 'Resource not found';

  return 'Unexpected error occurred';
}
