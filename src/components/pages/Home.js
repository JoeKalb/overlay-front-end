import React from 'react';
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <div>
            <h1>This will be a home page</h1>
            <button>
                <Link to="/thabuttress">Login</Link>
            </button>
        </div>
    )
}
