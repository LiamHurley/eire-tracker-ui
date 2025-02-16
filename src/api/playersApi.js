export async function fetchPlayers() {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/Players/overall`);
        if (!response.ok) {
            throw new Error("Failed to fetch players");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching players:", error);
        return [];
    }
}