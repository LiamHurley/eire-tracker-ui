import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Paper, List, ListItem, ClickAwayListener } from '@mui/material';
import { searchPlayersByName } from '../api/playersApi';
import { useState, useEffect } from "react";

export default function HeaderSearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchTerm.length >= 3) {
      const fetchResults = async () => {
        try {
          const response = await searchPlayersByName(searchTerm);
          setResults(response);
          setShowDropdown(true);
        } catch (error) {
          console.error("Error fetching search results", error);
        }
      };
      
      fetchResults();
    } else {
      setResults([]);
      setShowDropdown(false);
    }
  }, [searchTerm]);

  const handleResultClick = (playerId) => {
    navigate(`/players/${playerId}`);
    setShowDropdown(false);
    setSearchTerm("");
  };

  return (
    <ClickAwayListener onClickAway={() => setShowDropdown(false)}>
        <div style={{ position: "relative", display: "flex", alignItems: "center", flexDirection: "column" }}>
          <TextField
            variant="outlined"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            size="small"
            style={{ background: "white", borderRadius: "4px" }}
            onFocus={() => setShowDropdown(true)}
          />
          {showDropdown && results.length > 0 && (
            <Paper style={{ position: "absolute", top: "100%", left: 0, right: 0, zIndex: 10, maxHeight: "200px", overflowY: "auto", width: "100%" }}>
              <List>
                {results.map((result) => (
                  <ListItem 
                    key={result.playerId} 
                    button 
                    onClick={() => handleResultClick(result.playerId)}
                  >
                    {result.name}
                  </ListItem>
                ))}
              </List>
            </Paper>
          )}
        </div>
      </ClickAwayListener>
  )
}