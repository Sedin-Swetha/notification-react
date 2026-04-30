import React, { useState } from 'react';
import useDebounce from '../hooks/useDebounce';
import useFetch from '../hooks/useFetch';
import NotificationCard from './NotificationCard';
import '../styles/SearchBar.css';

function SearchBar({ notifications, onSearchChange }) {
  const [searchInput, setSearchInput] = useState('');

  const debouncedQuery = useDebounce(searchInput, 500);
  const { data: results, loading, error } = useFetch(debouncedQuery, notifications);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleClear = () => {
    setSearchInput('');
  };

  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <input
          type="text"
          placeholder="Search notifications by message, user, or type..."
          value={searchInput}
          onChange={handleInputChange}
          className="search-input"
          aria-label="Search notifications"
        />
        {searchInput && (
          <button
            onClick={handleClear}
            className="clear-button"
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>

    
      {loading && <div className="loading-state">Searching...</div>}

      {error && <div className="error-state">{error}</div>}


      {!loading && !error && searchInput.trim() && (
        <div className="results-container">
          {results.length > 0 ? (
            <div className="results-list">
              <p className="results-count">
                Found {results.length} result{results.length !== 1 ? 's' : ''}
              </p>
              {results.map((item, index) => (
                <NotificationCard
                  key={index}
                  type={item.type}
                  message={item.message}
                  user={item.user}
                  isImportant={item.isImportant}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">No results found</div>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
