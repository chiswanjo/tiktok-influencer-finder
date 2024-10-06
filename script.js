// Mock influencer data
const influencers = [
    { name: "Jane Doe", followers: 500000, engagementRate: 4.5, niche: "fashion" },
    { name: "John Smith", followers: 350000, engagementRate: 3.2, niche: "tech" },
    { name: "Emily Davis", followers: 150000, engagementRate: 6.0, niche: "fitness" },
    { name: "Michael Lee", followers: 250000, engagementRate: 2.8, niche: "gaming" },
    { name: "Sarah Wilson", followers: 800000, engagementRate: 5.5, niche: "beauty" }
];

// Function to display influencers
const displayResults = (results) => {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    if (results.length === 0) {
        resultsDiv.innerHTML = "<p>No influencers found.</p>";
        return;
    }

    results.forEach(influencer => {
        const influencerCard = `
            <div class="influencer-card">
                <h3>${influencer.name}</h3>
                <p>Followers: ${influencer.followers.toLocaleString()}</p>
                <p>Engagement Rate: ${influencer.engagementRate}%</p>
                <p>Niche: ${influencer.niche}</p>
            </div>
        `;
        resultsDiv.innerHTML += influencerCard;
    });
};

// Search function
const searchInfluencers = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    const filteredInfluencers = influencers.filter(influencer => {
        return (
            influencer.name.toLowerCase().includes(lowerCaseQuery) ||
            influencer.niche.toLowerCase().includes(lowerCaseQuery)
        );
    });
    displayResults(filteredInfluencers);
};

// Event listeners for search button
document.getElementById("searchBtn").addEventListener("click", () => {
    const query = document.getElementById("searchInput").value;
    searchInfluencers(query);
});

// Allow pressing 'Enter' to search
document.getElementById("searchInput").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        const query = document.getElementById("searchInput").value;
        searchInfluencers(query);
    }
});
