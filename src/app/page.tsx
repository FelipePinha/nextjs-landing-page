import { Header } from '@/app/components/header/Header';
import { Welcome } from '@/app/components/welcome/Welcome';
import { Features } from './components/features/Features';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';

export default function Home() {
    return (
        <>
            <Header />
            <Welcome />
            {/* <Features /> */}
            {/* <Contact /> */}
            {/* <Footer /> */}
        </>
    );
}
