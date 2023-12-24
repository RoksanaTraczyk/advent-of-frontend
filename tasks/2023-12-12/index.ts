export async function conductInterviews(
    subjects: string[],
    interview: (subject: string) => Promise<string>,
    timeConstraint: number
): Promise<string[]> {
    let results: string[] = [];
    const wait = () => new Promise(res => setTimeout(res, timeConstraint));
    let i = 0;
    while (i < subjects.length) {
        // interview(subjects[i])
        await interview(subjects[i])
        results.push('Discussed: ' + subjects[i])
        i++;
    }
    return results;
}