import readabilityScores from "readability-scores"
export const evaluate = (text: string) => {
    return readabilityScores(text)
}