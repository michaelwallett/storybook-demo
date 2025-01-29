export async function getMessage() {
  return new Promise<{ hello: string }>((resolve) => {
    return resolve({ hello: "Hello from server side!" });
  });
}
