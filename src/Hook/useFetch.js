export default async function Fetch() {
    const response = await fetch(`${process.env.REACT_APP_BACKEND}projects`, {
        method: 'GET',
        mode: "cors",
        headers: {
            'Content-Type': 'application/json',
        }
    }
    );
    if (!response.ok) throw new Error("Couldn't fetch projects'");
    const projects = await response.json();
    // console.log(projects);
    return projects;
}