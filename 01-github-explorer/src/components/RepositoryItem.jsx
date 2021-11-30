export function RepositoryItem({repository}) {
    return (
        <li>
            <strong>{repository?.name ?? 'Default'}</strong>
            <p>{ repository?.description ?? 'Description Default'}</p>

            <a href={repository?.link ?? 'https://github.com/unform/unform'} target="_blank">
                Acessar Repositório
            </a>
        </li>
    )
}