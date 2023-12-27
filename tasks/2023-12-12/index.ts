export async function conductInterviews(
    subjects: string[],
    interview: (subject: string) => Promise<string>,
    timeConstraint: number
): Promise<string[]> {
    const results: string[] = [];

    for (const subject of subjects) {
        try {
            const result = await Promise.race([
                new Promise((resolve, reject) =>
                    setTimeout(() => reject(new Error("Timeout")))
                ),
                interview(subject)
            ]);

            if (typeof result === "string") {
                results.push(result);
            }
        } catch (e) {
            if (e instanceof Error) {
                results.push(`Error: ${e.message}`);
            }
        }
    }

    return results;
}