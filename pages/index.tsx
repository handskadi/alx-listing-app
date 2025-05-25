import Head from 'next/head';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

export default function Home() {
    return (
        <>
            <Head>
                <title>ALX Listing App</title>
            </Head>
            <main className="min-h-screen p-8 bg-gray-50">
                <h1 className="text-3xl font-bold mb-6">Explore Listings</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <Card
                        image="/assets/placeholder.jpg"
                        title="Modern Studio Apartment"
                        description="A cozy and well-located apartment perfect for your next stay."
                    />
                    <Card
                        image="/assets/placeholder.jpg"
                        title="Beachside Villa"
                        description="Enjoy the ocean breeze in this spacious villa with scenic views."
                    />
                    <Card
                        image="/assets/placeholder.jpg"
                        title="Downtown Loft"
                        description="Stay in the heart of the city with access to all major attractions."
                    />
                </div>
                <div className="mt-8">
                    <Button text="Load More" />
                </div>
            </main>
        </>
    );
}
