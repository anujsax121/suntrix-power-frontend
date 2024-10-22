import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebarSection pt-5 ps-0 pe-0'>

      <div className="sidebar">
        <ul className="sidebar-menu">
          <li><a href="#" className='active'><i class="fa-solid fa-house"></i> Home</a></li>
          <li><a href="#"><i class="fa-solid fa-database"></i> Products</a></li>
          <li><a href="#"><i class="fa-regular fa-square-plus"></i> Add Product</a></li>
          <li><a href="/search"><i class="fa-solid fa-magnifying-glass"></i> Search Product</a></li>
          <li><a href="#"><i class="fa-solid fa-trash"></i> Remove Product</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar