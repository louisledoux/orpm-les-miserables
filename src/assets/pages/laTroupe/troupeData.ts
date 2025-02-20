interface Member {
  firstName: string;
  lastName: string;
  instrument?: string;
}

interface StaffMember extends Member {
  role: string;
}

export const troupeMembers: Member[] = [
  { firstName: 'Thomas', lastName: 'Baille' },
  { firstName: 'Gaelle', lastName: 'Beaurain' },
  { firstName: 'Leïlou', lastName: 'Bourlet' },
  { firstName: 'Laora', lastName: 'Brachot' },
  { firstName: 'Ambre', lastName: 'Carneau' },
  { firstName: 'Quentin', lastName: 'Choquel' },
  { firstName: 'Vincent', lastName: 'Choquel' },
  { firstName: 'Lucie', lastName: 'Clouet' },
  { firstName: 'Pauline', lastName: 'Damerdji' },
  { firstName: 'Marie-Christine', lastName: 'Demeester' },
  { firstName: 'Emeline', lastName: 'Denoeux' },
  { firstName: 'Louise', lastName: 'Denoeux' },
  { firstName: 'Louise', lastName: 'Desprez' },
  { firstName: 'Sébastien', lastName: 'De Wilde' },
  { firstName: 'Frédéric', lastName: 'Dupont' },
  { firstName: 'Tristan', lastName: 'Fasquelle' },
  { firstName: 'Marie', lastName: 'Gourlet' },
  { firstName: 'Nicolas', lastName: 'Gourlet' },
  { firstName: 'Florence', lastName: 'Gourlet' },
  { firstName: 'Claire', lastName: 'Gressier' },
  { firstName: 'Frédérique', lastName: 'Gressier' },
  { firstName: 'Sylvie', lastName: 'Houzé' },
  { firstName: 'Gabin', lastName: 'Lefevre' },
  { firstName: 'Caroline', lastName: 'Lespagnol' },
  { firstName: 'Perrine', lastName: 'Lespagnol' },
  { firstName: 'Juliette', lastName: 'Mouney' },
  { firstName: 'Marie', lastName: 'Pioskowik' },
  { firstName: 'Sarah', lastName: 'Renier' },
  { firstName: 'Nicolas', lastName: 'Smaghue' },
  { firstName: 'Manon', lastName: 'Souames' },
  { firstName: 'Flore', lastName: 'Souames' },
  { firstName: 'Carlotta', lastName: 'Soucheyre' },
  { firstName: 'Samuel', lastName: 'Thaon' },
  { firstName: 'Magali', lastName: 'Vanhoutte' },
  { firstName: 'Capucine', lastName: 'Waquet' },
  { firstName: 'Stéphanie', lastName: 'Willems' },
];

export const orchestraMembers: Member[] = [
  { firstName: 'Nathalie', lastName: 'Andula', instrument: 'Flûte' },
  { firstName: 'Francis', lastName: 'Ansart', instrument: 'Trompette' },
  { firstName: 'Céline', lastName: 'Bilasco', instrument: 'Percussions' },
  { firstName: 'Veronique', lastName: 'Boitel', instrument: 'Clarinette' },
  { firstName: 'Philippe', lastName: 'Bossaert', instrument: 'Clarinette' },
  { firstName: 'Véronique', lastName: 'Bossaert', instrument: 'Clarinette' },
  { firstName: 'Carole', lastName: 'Bulleteau', instrument: 'Clarinette' },
  { firstName: 'Adrien', lastName: 'Camus', instrument: 'Saxophone' },
  { firstName: 'Monique', lastName: 'Coutarel', instrument: 'Clarinette' },
  { firstName: 'Hélène', lastName: 'Dehaut', instrument: 'Flûte' },
  { firstName: 'Aline', lastName: 'Desmullier', instrument: 'Flûte' },
  { firstName: 'Claude', lastName: 'Dietrich', instrument: 'Piano' },
  { firstName: 'Christian', lastName: 'Froment', instrument: 'Trompette' },
  { firstName: 'Aurélie', lastName: 'Geeraert', instrument: 'Cor' },
  { firstName: 'Hubert', lastName: 'Gressier', instrument: 'Direction' },
  { firstName: 'Pauline', lastName: 'Gressier', instrument: 'Flûte' },
  { firstName: 'Henri', lastName: 'Guyot', instrument: 'Saxophone' },
  { firstName: 'Vincent', lastName: 'Laby', instrument: 'Trompette' },
  { firstName: 'Claudine', lastName: 'Lecocq', instrument: 'Flûte' },
  { firstName: 'Elise', lastName: 'Lecocq', instrument: 'Clarinette' },
  { firstName: 'Louis', lastName: 'Ledoux', instrument: 'Basson' },
  { firstName: 'Justine', lastName: 'Lefevre', instrument: 'Cor' },
  { firstName: 'Pierrick', lastName: 'Lefevre', instrument: 'Saxophone' },
  { firstName: 'Catherine', lastName: 'Luchart', instrument: 'Flûte' },
  {
    firstName: 'Didier',
    lastName: 'Maillard',
    instrument: 'Guitares, Claviers',
  },
  { firstName: 'Thierry', lastName: 'Olivier', instrument: 'Saxophone' },
  {
    firstName: 'Marie-Laurence',
    lastName: 'Outtier',
    instrument: 'Clarinette',
  },
  { firstName: 'Servane', lastName: 'Pauwels', instrument: 'Clarinette' },
  { firstName: 'Marie-Bernadette', lastName: 'Petit', instrument: 'Saxophone' },
  { firstName: 'Céline', lastName: 'Preux', instrument: 'Cor' },
  { firstName: 'Hervé', lastName: 'Priem', instrument: 'Trompette' },
  { firstName: 'Olivier', lastName: 'Raoult', instrument: 'Guitare basse' },
  { firstName: 'Vincent', lastName: 'Terret', instrument: 'Trombone' },
  { firstName: 'François', lastName: 'Traisnel', instrument: 'Trombone' },
  { firstName: 'Sylvia', lastName: 'Turrell', instrument: 'Basson' },
  { firstName: 'Inès', lastName: 'Van Nieuwenhove', instrument: 'Flûte' },
  {
    firstName: 'Vincent',
    lastName: 'Van Nieuwenhove',
    instrument: 'Clarinette',
  },
];

export const staffMembers: StaffMember[] = [
  { firstName: 'Claire', lastName: 'Gressier', role: 'Mise en scène' },
  { firstName: 'Manon', lastName: 'Souames', role: 'Mise en scène' },
  { firstName: 'Marie', lastName: 'Pioskowik', role: 'Chorégraphie' },
  { firstName: 'Florence', lastName: 'Gourlet', role: 'Chant' },
  { firstName: 'Carlotta', lastName: 'Soucheyre', role: 'Chant' },
  { firstName: 'William', lastName: 'Desmarescaux', role: 'Sonorisation' },
  { firstName: 'Philippe', lastName: 'Tiberghien', role: 'Sonorisation' },
  { firstName: 'Carlotta', lastName: 'Soucheyre', role: 'Costumes' },
  { firstName: 'Magali', lastName: 'Vanhoutte', role: 'Costumes' },
  { firstName: 'Nathalie', lastName: 'Andula', role: 'Couture' },
  { firstName: 'Véronique', lastName: 'Boitel', role: 'Couture' },
  { firstName: 'Véronique', lastName: 'Bossaert', role: 'Couture' },
  { firstName: 'Marie', lastName: 'Cichon', role: 'Couture' },
  { firstName: 'Monique', lastName: 'Coutarel', role: 'Couture' },
  { firstName: 'Marie', lastName: 'Gourlet', role: 'Couture' },
  { firstName: 'Henri', lastName: 'Guyot', role: 'Couture' },
  { firstName: 'Elise', lastName: 'Lecocq', role: 'Couture' },
  { firstName: 'Claudine', lastName: 'Lecocq', role: 'Couture' },
  { firstName: 'Justine', lastName: 'Lefevre', role: 'Couture' },
  { firstName: 'Eline', lastName: 'De Wilde', role: 'Maquillage' },
  { firstName: 'Lorelei', lastName: 'De Wilde', role: 'Maquillage' },
  { firstName: 'Elise', lastName: 'Gressier', role: 'Maquillage' },
  { firstName: 'Sylvie', lastName: 'Houzé', role: 'Maquillage' },
  { firstName: 'Justine', lastName: 'Carneau', role: 'Habilleuses' },
  { firstName: 'Hélène', lastName: 'Desprez', role: 'Habilleuses' },
  { firstName: 'Marie-Claire', lastName: 'Vanhecke', role: 'Habilleuses' },
  { firstName: 'Bernard', lastName: 'Boitel', role: 'Machinistes' },
  { firstName: 'Gauthier', lastName: 'Desmullier', role: 'Machinistes' },
  { firstName: 'Jean-Michel', lastName: 'Lecocq', role: 'Machinistes' },
  { firstName: 'Jody', lastName: 'Longuepée', role: 'Machinistes' },
  { firstName: 'Gilles', lastName: 'Outtier', role: 'Machinistes' },
  { firstName: 'Lionel', lastName: 'Polowczyk', role: 'Machinistes' },
  { firstName: 'Alain', lastName: 'Pruvost', role: 'Machinistes' },
  { firstName: 'Antoine', lastName: 'Roose', role: 'Machinistes' },
  { firstName: 'Karim', lastName: 'Souames', role: 'Machinistes' },
  { firstName: 'Pauline', lastName: 'Gressier', role: 'Communication' },
  { firstName: 'Louis', lastName: 'Ledoux', role: 'Communication' },
  {
    firstName: 'Philippe',
    lastName: 'Bossaert',
    role: 'Administration et Logistique',
  },
  {
    firstName: 'Véronique',
    lastName: 'Bossaert',
    role: 'Administration et Logistique',
  },
  {
    firstName: 'Thierry',
    lastName: 'Olivier',
    role: 'Administration et Logistique',
  },
  {
    firstName: 'Hubert',
    lastName: 'Gressier',
    role: 'Direction artistique et coordination',
  },
];
