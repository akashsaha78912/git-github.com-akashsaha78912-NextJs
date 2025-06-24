import Counter from "./counter";

export const metadata = {
    title: 'Counter Page'
}

export default function Page() {
    return (
        <>
            <h1>Counter Page</h1>
            <p>This is the counter page.</p>
            <Counter />
        </>
    )
}