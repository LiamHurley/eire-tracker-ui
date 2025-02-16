import { useState, useEffect } from "react";
import { fetchPlayerById } from "../api/playersApi";

const usePlayer = (id) => {
    const [player, setPlayer] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPlayer = async () => {
            if (!id) return;
            setLoading(true);
            const data = await fetchPlayerById(id);
            setPlayer(data);
            setLoading(false);
        };

        loadPlayer();
    }, [id]);

    return { player, loading };
};

export default usePlayer;