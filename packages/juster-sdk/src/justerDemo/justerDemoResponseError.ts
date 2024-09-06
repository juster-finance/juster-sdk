export class JusterDemoResponseError extends Error {
  constructor(status: Response['status'], content: string) {
    super(JusterDemoResponseError.getMessage(status, content));
  }

  protected static getMessage(status: Response['status'], content: string): string {
    return `Response Error [Code: ${status}]. Content = ${content}`;
  }
}
