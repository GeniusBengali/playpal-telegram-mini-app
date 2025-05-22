export const matchTeamLabel = (teamSize: number): string => {
  switch (teamSize) {
    case 1:
      return `Solo (${teamSize})`;
    case 2:
      return `Duo (${teamSize})`;
    case 3:
      return `Trio (${teamSize})`;
    case 4:
      return `Squad (${teamSize})`;
    case 5:
      return `Pentagon (${teamSize})`; // optional custom
    case 6:
      return `Hexa Team (${teamSize})`;
    case 7:
      return `Sept Squad (${teamSize})`;
    case 8:
      return `Octo Team (${teamSize})`;
    default:
      return `${teamSize} Players`;
  }
}