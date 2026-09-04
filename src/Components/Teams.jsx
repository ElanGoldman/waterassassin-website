
const teamsIn = [
    { id: 1, name: "Team 1", members: ["Bedidin", "Elan", "Raanan", "Ella"] },
    { id: 2, name: "Team 2", members: ["Rena", "Mas", "Lili G", "Leah W", "Hannah S"] },
    { id: 3, name: "Team 3", members: ["Ben Z", "Lexi", "David K", "Hannah W"] },
    { id: 4, name: "Team 4", members: ["Eyal", "Adam R", "Rebecca", "David M"] },
    { id: 5, name: "Team 5", members: ["Eliav", "Leah B", "Kyle", "Lani", "Chaim Medetsky"] },
    { id: 6, name: "Team 6", members: ["Madeline", "Joey", "Hannah F", "Masha"] },
    { id: 7, name: "Team 7", members: ["J", "Noah", "Gabri", "Mollie", "Edmond"] },
    { id: 8, name: "Team 8", members: ["Sammy", "Adam D", "Jebrani", "Jonah", "MoCo"] },
    { id: 9, name: "Team 9", members: ["Izzy G", "Ariel", "Eliana", "Izzy I", "H Yellin"] },
    { id: 10, name: "Team 10", members: ["Oren", "Sean", "Evie", "Maya", "Aryeh"] }
];

const teamsOut = [

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