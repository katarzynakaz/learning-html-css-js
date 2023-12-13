import React, { useState } from 'react';

function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleDropdown() {
        setIsOpen(!isOpen);
    }

    function navigate(path) {
        window.location.href = path;
    }

    return (
        <div className="dropdown">
            <button className="dropdown-toggle" onClick={toggleDropdown}>Menu</button>
            {isOpen && (
                <div className="dropdown-menu">
                    <div className="dropdown-item" onClick={function() { navigate('/login'); }}>Login</div>
                    <div className="dropdown-item" onClick={function() { navigate('/myorders'); }}>Orders</div>
                    <div className="dropdown-item" onClick={function() { navigate('/logout'); }}>Logout</div>
                </div>
            )}
        </div>
    );
}

export default DropdownMenu;
