document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the admin page
    if (!document.querySelector('.admin-layout')) return;
    
    // Initialize data storage
    let resultsData = [];
    let leagueData = [];
    let matchesData = [];
    
    // Load existing data from tables
    loadExistingData();
    
    // Form submission handlers
    document.getElementById('results-form').addEventListener('submit', handleResultsSubmit);
    document.getElementById('league-form').addEventListener('submit', handleLeagueSubmit);
    document.getElementById('matches-form').addEventListener('submit', handleMatchesSubmit);
    
    // Publish button handler
    document.getElementById('publish-btn').addEventListener('click', publishChanges);
    
    // Load existing data from tables
    function loadExistingData() {
        // Load results data
        const resultsTable = document.getElementById('results-table');
        if (resultsTable) {
            const rows = resultsTable.querySelectorAll('tbody tr');
            rows.forEach(row => {
                const cells = row.querySelectorAll('td');
                resultsData.push({
                    id: row.querySelector('.btn-edit').dataset.id,
                    date: cells[0].textContent,
                    team1: cells[1].textContent,
                    score: cells[2].textContent,
                    team2: cells[3].textContent
                });
            });
        }
        
        // Load league data
        const leagueTable = document.getElementById('league-table');
        if (leagueTable) {
            const rows = leagueTable.querySelectorAll('tbody tr');
            rows.forEach(row => {
                const cells = row.querySelectorAll('td');
                leagueData.push({
                    id: row.querySelector('.btn-edit').dataset.id,
                    position: cells[0].textContent,
                    team: cells[1].textContent,
                    played: cells[2].textContent,
                    won: cells[3].textContent,
                    drawn: cells[4].textContent,
                    lost: cells[5].textContent,
                    points: cells[6].textContent
                });
            });
        }
        
        // Load matches data
        const matchesTable = document.getElementById('matches-table');
        if (matchesTable) {
            const rows = matchesTable.querySelectorAll('tbody tr');
            rows.forEach(row => {
                const cells = row.querySelectorAll('td');
                matchesData.push({
                    id: row.querySelector('.btn-edit').dataset.id,
                    date: cells[0].textContent,
                    homeTeam: cells[1].textContent,
                    awayTeam: cells[2].textContent,
                    venue: cells[3].textContent
                });
            });
        }
    }
    
    // Handle results form submission
    function handleResultsSubmit(e) {
        e.preventDefault();
        
        const date = document.getElementById('result-date').value;
        const team1 = document.getElementById('team1').value;
        const score1 = document.getElementById('score1').value;
        const score2 = document.getElementById('score2').value;
        const team2 = document.getElementById('team2').value;
        
        // Format date
        const formattedDate = new Date(date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
        
        // Create new result object
        const newResult = {
            id: Date.now().toString(),
            date: formattedDate,
            team1: team1,
            score: `${score1} - ${score2}`,
            team2: team2
        };
        
        // Add to data array
        resultsData.push(newResult);
        
        // Add to table
        addResultToTable(newResult);
        
        // Reset form
        e.target.reset();
    }
    
    // Add result to table
    function addResultToTable(result) {
        const tbody = document.querySelector('#results-table tbody');
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${result.date}</td>
            <td>${result.team1}</td>
            <td>${result.score}</td>
            <td>${result.team2}</td>
            <td>
                <button class="btn-edit" data-id="${result.id}">Edit</button>
                <button class="btn-delete" data-id="${result.id}">Delete</button>
            </td>
        `;
        
        tbody.appendChild(row);
        
        // Add event listeners to new buttons
        row.querySelector('.btn-edit').addEventListener('click', () => editResult(result.id));
        row.querySelector('.btn-delete').addEventListener('click', () => deleteResult(result.id));
    }
    
    // Handle league form submission
    function handleLeagueSubmit(e) {
        e.preventDefault();
        
        const teamName = document.getElementById('team-name').value;
        const played = document.getElementById('played').value;
        const won = document.getElementById('won').value;
        const drawn = document.getElementById('drawn').value;
        const lost = document.getElementById('lost').value;
        const points = document.getElementById('points').value;
        
        // Calculate position (simplified)
        const position = leagueData.length + 1;
        
        // Create new team object
        const newTeam = {
            id: Date.now().toString(),
            position: position,
            team: teamName,
            played: played,
            won: won,
            drawn: drawn,
            lost: lost,
            points: points
        };
        
        // Add to data array
        leagueData.push(newTeam);
        
        // Add to table
        addTeamToTable(newTeam);
        
        // Reset form
        e.target.reset();
    }
    
    // Add team to table
    function addTeamToTable(team) {
        const tbody = document.querySelector('#league-table tbody');
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${team.position}</td>
            <td>${team.team}</td>
            <td>${team.played}</td>
            <td>${team.won}</td>
            <td>${team.drawn}</td>
            <td>${team.lost}</td>
            <td>${team.points}</td>
            <td>
                <button class="btn-edit" data-id="${team.id}">Edit</button>
                <button class="btn-delete" data-id="${team.id}">Delete</button>
            </td>
        `;
        
        tbody.appendChild(row);
        
        // Add event listeners to new buttons
        row.querySelector('.btn-edit').addEventListener('click', () => editTeam(team.id));
        row.querySelector('.btn-delete').addEventListener('click', () => deleteTeam(team.id));
    }
    
    // Handle matches form submission
    function handleMatchesSubmit(e) {
        e.preventDefault();
        
        const date = document.getElementById('match-date').value;
        const homeTeam = document.getElementById('home-team').value;
        const awayTeam = document.getElementById('away-team').value;
        const venue = document.getElementById('venue').value;
        
        // Format date
        const formattedDate = new Date(date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
        
        // Create new match object
        const newMatch = {
            id: Date.now().toString(),
            date: formattedDate,
            homeTeam: homeTeam,
            awayTeam: awayTeam,
            venue: venue
        };
        
        // Add to data array
        matchesData.push(newMatch);
        
        // Add to table
        addMatchToTable(newMatch);
        
        // Reset form
        e.target.reset();
    }
    
    // Add match to table
    function addMatchToTable(match) {
        const tbody = document.querySelector('#matches-table tbody');
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${match.date}</td>
            <td>${match.homeTeam}</td>
            <td>${match.awayTeam}</td>
            <td>${match.venue}</td>
            <td>
                <button class="btn-edit" data-id="${match.id}">Edit</button>
                <button class="btn-delete" data-id="${match.id}">Delete</button>
            </td>
        `;
        
        tbody.appendChild(row);
        
        // Add event listeners to new buttons
        row.querySelector('.btn-edit').addEventListener('click', () => editMatch(match.id));
        row.querySelector('.btn-delete').addEventListener('click', () => deleteMatch(match.id));
    }
    
    // Edit result
    function editResult(id) {
        const result = resultsData.find(r => r.id === id);
        if (!result) return;
        
        // Parse score
        const [score1, score2] = result.score.split(' - ');
        
        // Fill form
        document.getElementById('result-date').value = new Date(result.date).toISOString().split('T')[0];
        document.getElementById('team1').value = result.team1;
        document.getElementById('score1').value = score1;
        document.getElementById('score2').value = score2;
        document.getElementById('team2').value = result.team2;
        
        // Remove from data and table
        deleteResult(id);
    }
    
    // Delete result
    function deleteResult(id) {
        // Remove from data
        resultsData = resultsData.filter(r => r.id !== id);
        
        // Remove from table
        const row = document.querySelector(`#results-table .btn-delete[data-id="${id}"]`).closest('tr');
        row.remove();
    }
    
    // Edit team
    function editTeam(id) {
        const team = leagueData.find(t => t.id === id);
        if (!team) return;
        
        // Fill form
        document.getElementById('team-name').value = team.team;
        document.getElementById('played').value = team.played;
        document.getElementById('won').value = team.won;
        document.getElementById('drawn').value = team.drawn;
        document.getElementById('lost').value = team.lost;
        document.getElementById('points').value = team.points;
        
        // Remove from data and table
        deleteTeam(id);
    }
    
    // Delete team
    function deleteTeam(id) {
        // Remove from data
        leagueData = leagueData.filter(t => t.id !== id);
        
        // Remove from table
        const row = document.querySelector(`#league-table .btn-delete[data-id="${id}"]`).closest('tr');
        row.remove();
        
        // Update positions
        updatePositions();
    }
    
    // Update positions
    function updatePositions() {
        const rows = document.querySelectorAll('#league-table tbody tr');
        rows.forEach((row, index) => {
            row.querySelector('td:first-child').textContent = index + 1;
        });
    }
    
    // Edit match
    function editMatch(id) {
        const match = matchesData.find(m => m.id === id);
        if (!match) return;
        
        // Fill form
        document.getElementById('match-date').value = new Date(match.date).toISOString().split('T')[0];
        document.getElementById('home-team').value = match.homeTeam;
        document.getElementById('away-team').value = match.awayTeam;
        document.getElementById('venue').value = match.venue;
        
        // Remove from data and table
        deleteMatch(id);
    }
    
    // Delete match
    function deleteMatch(id) {
        // Remove from data
        matchesData = matchesData.filter(m => m.id !== id);
        
        // Remove from table
        const row = document.querySelector(`#matches-table .btn-delete[data-id="${id}"]`).closest('tr');
        row.remove();
    }
    
    // Publish changes
    function publishChanges() {
        const publishStatus = document.getElementById('publish-status');
        
        // In a real implementation, this would send the data to a server
        // For this demo, we'll just show a success message
        
        // Prepare data for export
        const exportData = {
            results: resultsData,
            league: leagueData,
            matches: matchesData
        };
        
        // Convert to JSON
        const jsonData = JSON.stringify(exportData, null, 2);
        
        // Create a blob and download link
        const blob = new Blob([jsonData], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        // Create download link
        const a = document.createElement('a');
        a.href = url;
        a.download = 'sports-data.json';
        document.body.appendChild(a);
        a.click();
        
        // Clean up
        setTimeout(() => {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
        
        // Show success message
        publishStatus.textContent = 'Changes published successfully! Download the JSON file and use it to update your site.';
        publishStatus.className = 'publish-status success';
        
        // In a real implementation, you would:
        // 1. Send the data to your server
        // 2. Server would update the necessary files
        // 3. Server would rebuild the site
        // 4. Return success/failure status
    }
    
    // Add event listeners to existing buttons
    document.querySelectorAll('.btn-edit').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = this.dataset.id;
            const table = this.closest('table').id;
            
            if (table === 'results-table') {
                editResult(id);
            } else if (table === 'league-table') {
                editTeam(id);
            } else if (table === 'matches-table') {
                editMatch(id);
            }
        });
    });
    
    document.querySelectorAll('.btn-delete').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = this.dataset.id;
            const table = this.closest('table').id;
            
            if (table === 'results-table') {
                deleteResult(id);
            } else if (table === 'league-table') {
                deleteTeam(id);
            } else if (table === 'matches-table') {
                deleteMatch(id);
            }
        });
    });
}); 