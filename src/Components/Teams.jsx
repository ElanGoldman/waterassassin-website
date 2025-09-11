
const teamsIn = [
    { id: 2, name: "Team E-Squad", members: ["Hannah Feld", "Eliana", "Elan", "Eliav"] },
    { id: 7, name: "Team NJRB", members: ["Noah", "Josh Weiss", "Rosie", "Ben Edidin"] },
    { id: 11, name: "Team ERSR", members: ["Ella", "Eyal", "Sammy", "Ronan"] }
];

const teamsOut = [
    { id: 1, name: "Team LA³", members: ["Leah Weinberger", "Amalya", "Adam", "Ariel"] },
    { id: 3, name: "Team LEXI-TAN", members: ["Izzy Ingber", "Lexi", "Eitan Moore", "Lani"] },
    { id: 4, name: "Team D-MER", members: ["Daniel", "Mollie", "Eitan", "Rena"] },
    { id: 5, name: "Team MKSM", members: ["Morris", "Kyle", "Sean", "Maor"] },
    { id: 6, name: "Team JASL", members: ["Jay", "Asher", "Sophia", "Lyla"] },
    { id: 8, name: "Team J²DI", members: ["Jordan", "Joey", "David", "Izzy Goldberg"] },
    { id: 9, name: "Team BRMC", members: ["Beaue", "Madeline", "Rebecca", "Chaim"] },
    { id: 10, name: "Team JONN", members: ["Josh Ebrani", "Oren", "Nava", "Noa"] }
];


export default function Teams() {
    return (
        <div className="page">
            <h2>Teams</h2>
            Still in: 
            <ul>
                {teamsIn.map(team => (
                    <li key={team.id}>
                        <strong>{team.name}</strong> - Members: {team.members.join(", ")}
                    </li>
                ))}
            </ul>

            No longer with us:
            <ul>
                {teamsOut.map(team => (
                    <li key={team.id}>
                        <strong>{team.name}</strong> - Members: {team.members.join(", ")}
                    </li>
                ))}
            </ul>
        </div>
    );
}