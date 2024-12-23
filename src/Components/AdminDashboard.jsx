export default function AdminDashboard() {
  return (
    <div>
      <header>
        <div>
          <h1>Cinema Hub</h1>
          <div>
            <input placeholder="Search for Moives..."></input>
            <button>
              <i className="fas fa-search"></i>
              Search
            </button>
          </div>
          <div>
            <span>Admin</span>
            <span>|</span>
            <span>Add Movies</span>
            <span>|</span>
            <span>User Profile</span>
            <span>|</span>
            <span>Logout</span>
          </div>
        </div>
      </header>
    </div>
  );
}
