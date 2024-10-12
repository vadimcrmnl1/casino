export interface DataEvents {
    id: number | undefined
    team1: string | undefined
    team2: string | undefined
    date: string | undefined
    odds: number[] | undefined
    logo1: string
    logo2: string
}
export const events: DataEvents[] = [
    { id: 1, team1: 'Manchester United', team2: 'Chelsea', date: '15.10.2024', odds: [1.5, 2.0, 3.0], logo1: '/casino/assets/manunited.png', logo2: '/casino/assets/chelsea.png' },
    { id: 2, team1: 'Chelsea', team2: 'Liverpool', date: '16.10.2024', odds: [1.8, 1.9, 4.0], logo1: '/casino/assets/chelsea.png', logo2: '/casino/assets/liverpool.svg'  },
    { id: 3, team1: 'Liverpool', team2: 'Manchester City', date: '17.10.2024', odds: [1.9, 2.0, 3.2], logo1: '/casino/assets/liverpool.svg', logo2: '/casino/assets/mancity.png'  },
    { id: 4, team1: 'Manchester City', team2: 'Manchester United', date: '18.10.2024', odds: [1.8, 2.4, 3.9], logo1: '/casino/assets/mancity.png', logo2: '/casino/assets/manunited.png'  },
];