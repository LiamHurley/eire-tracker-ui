const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function fetchPlayers() {
    try {
        const response = await fetch(`${API_BASE_URL}/Players/overall`);
        if (!response.ok) {
            throw new Error("Failed to fetch players");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching players:", error);
        return [];
    }
};

export const fetchPlayerById = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/players/${id}`);
        if (!response.ok) throw new Error("Failed to fetch player");
        return await response.json();
    } catch (error) {
        console.error(`Error fetching player with ID ${id}:`, error);
        return null;
    }
};

export const fetchPlayerForComparison = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/players/compare/${id}`);
        if (!response.ok) throw new Error("Failed to fetch player");
        return await response.json();
    } catch (error) {
        console.error(`Error fetching player with ID ${id}:`, error);
        return null;
    }
};

export const searchPlayersByName = async (query) => {
    const response = await fetch(`${API_BASE_URL}/players/search?name=${query}`);
    return response.ok ? await response.json() : [];
};
