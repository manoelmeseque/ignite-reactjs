import '../src/styles/global.scss'
import { Counter } from './components/Counter'
import { RepositorList } from './components/RepositoryList'

export function App() {
    return (
        <>
            <RepositorList />
            <Counter />
        </>
    )
}