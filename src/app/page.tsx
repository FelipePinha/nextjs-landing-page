import { Header } from '@/app/components/header/Header';
import { Welcome } from '@/app/components/welcome/Welcome';
import { Features } from './components/features/Features';

export default function Home() {
    return (
        <>
            <Header />
            <Welcome />
            <Features />
        </>
    );
}
