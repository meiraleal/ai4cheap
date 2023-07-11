// wrapper to execute a pocketbase client request and generate alerts on failure
export async function alertOnFailure(request: () => void) {
  try {
    await request();
  } catch (e: any) {
    const {
      message,
      data: { data = {} },
    } = e;
    if (message) console.error(message);
    for (const key in data) {
      const { message } = data[key];
      if (message) console.error(`${key}: ${message}`);
    }
  }
}
