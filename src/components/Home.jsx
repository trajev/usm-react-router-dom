import React from 'react';

const Home = () => {
    const popularPosts = [
        {
            id: 1,
            image: 'https://via.placeholder.com/150',
            title: 'Blog Post 1',
            description: 'This is a description for the first blog post.',
        },
        {
            id: 2,
            image: 'https://via.placeholder.com/150',
            title: 'Blog Post 2',
            description: 'This is a description for the second blog post.',
        },
        {
            id: 3,
            image: 'https://via.placeholder.com/150',
            title: 'Blog Post 3',
            description: 'This is a description for the third blog post.',
        },
    ];

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-1/4 bg-white p-6 border-r border-t border-gray-200 ">
                <img
                    src="https://via.placeholder.com/100"
                    alt="Sidebar Image"
                    className="w-24 h-24 object-cover rounded-full mx-auto"
                />
                <h2 className="text-xl font-bold text-center mt-4 text-green-600">Sidebar Heading</h2>
                <p className="mt-2 text-gray-700 text-center">
                    This is a description of the sidebar content. It can be anything relevant to the sidebar.
                </p>
            </aside>

            {/* Main Content */}
            <main className="w-3/4 p-6">
                <h1 className="text-2xl font-bold text-green-600 mb-6">Popular Posts</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {popularPosts.map(post => (
                        <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-bold text-gray-900">{post.title}</h2>
                                <p className="mt-2 text-gray-700">{post.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Home;
