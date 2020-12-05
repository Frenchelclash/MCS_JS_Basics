let newSchool = [
  [
    ['Lil Yachty', 'Playboi Carti', 'Lil Uzi Vert'],
    ['Sonny Digital', 'Metro Boomin', '12Hunna']
  ],
  [
    ['Yung Lean', 'Ecco2K', 'Bladee'],
    ['Whitearmor', 'PJ Beats', 'Yung Gud']
  ]
]
for(a = 0; a<newSchool.length; a++){
	for(b = 0; b<newSchool[a].length; b++) {
		for(i = 0; i<newSchool[a][b].length; i++) {
			console.log(newSchool[a][b][i]);
		}
	}
}
