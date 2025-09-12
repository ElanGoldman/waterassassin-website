import sample from '../Assets/sample.jpg';

export default function Home() {
    return (
        <div className="page">
            <h2>Home</h2>
            <p>This is the website for OCP water assassin.</p>

            <img src={sample} alt="Sample" style={{maxWidth: '100%', height: 'auto'}} />
        </div>
    );
}

