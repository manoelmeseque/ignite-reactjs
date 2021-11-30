import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: 'Unform',
    description: 'Unform in React',
    link: 'https://github.com/unform/unform'
}

export function RepositorList() {
    return (
        <section className="repository_list">
            <h1>Lista de repositórios</h1>

            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem />
                <RepositoryItem />
                <RepositoryItem />
            </ul>
        </section>
    )
}