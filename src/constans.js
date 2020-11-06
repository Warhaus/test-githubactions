const selectState = [
    {value: '0', label: 'Aquarius'},
    {value: '1', label: 'Pisces'},
    {value: '2', label: 'Aries'},
    {value: '3', label: 'Taurus'},
    {value: '4', label: 'Gemini'},
    {value: '5', label: 'Cancer'},
    {value: '6', label: 'leo'},
    {value: '7', label: 'Virgo'},
    {value: '8', label: 'Libra'},
    {value: '9', label: 'Scorpio'},
    {value: '10', label: 'Sagittarius'},
    {value: '11', label: 'Capricorn'},
];


const horoscopeSingData = [
    {
        id: '0',
        link: '/sign/aquarius/',
        name: 'Aquarius',
        img: '/img/aquarius.png',
        date: 'Jan 20 - Feb 18',
        descriptionGroup: [
            {
                id: 0,
                description: "You're likely to enjoy today's change of tone, Pisces. Don't you feel a need to take friendships beyond the superficial level? Perhaps you should reestablish contact with some former friends, too, although you may find that you have some bonds to repair. In any case, you can expect another month devoted to sweeping the cobwebs out of your emotional universe in order to let in sunlight and promise.",
            },
            {
                id: 1,
                description: "You're likely to enjoy today's change of tone, Pisces. Don't you feel a need to take friendships beyond the superficial level? Perhaps you should reestablish contact with some former friends, too, although you may find that you have some bonds to repair. In any case, you can expect another month devoted to sweeping the cobwebs out of your emotional universe in order to let in sunlight and promise.",
            },
            {
                id: 2,
                description: "You may have your mind set on some big plans that you've been working on for some time now, Pisces. The problem is that today there is some conflict with something or someone with a large ego who suddenly wants a piece of the pie. Either that or this person wants to burst your bubble. Don't give up hope on your dreams. Realize that this opposition is just part of the adventure.",
            },
            {
                id: 3,
                description: "mercury is finally turning direct on Tuesday, but it’s still not all smooth sailing for you yet. Mercury will be in flighty Libra until next week, making it difficult for you to stay on topic or make a decision. If you have any big decisions that could change your life completely, you might want to save them for next week.Mercury will be in your intimacy sector for the rest of the week, encouraging you to take a step back and look at your mental process. How do you think about relationships? Why are taboos so taboo? These are the questions you should be asking yourself as you sink deeper into your mind. Then Mercury squares Saturn in Capricorn on Friday, causing some added stress and pressure in your life. Don’t try to suffer in silence. If you need help, Pisces, ask for it. Your friends have your back.",
            },
            {
                id: 4,
                description: "Your mind will be highly active in November despite the slower planetary pace, Pisces. A full moon at the end of October in your communication sector spills over into November, likely bringing to culmination an important writing, speaking, or contractual project (solar third house). Don’t rush it, though. Delay it until Mercury awakens on the November 3 and Mars turns direct ten days later. With the sun moving through your expansion sector throughout most of this month, you’ll be curious about moving in new directions (solar ninth house). While this would normally encourage you to travel overseas, you may instead be focused on going back to school or pursuing a publishing or media matter. When the new moon arrives on the fourteenth, a doorway could open for you to finally push forward what you seek. If you’re waiting for visa approval, you’ll likely get your answer at that time. An important shift for the month ahead occurs when the sun moves into your achievements sector on November 21 (solar tenth house). Your mind will surely be on your professional life for the weeks to come, especially with the electrical energy rippling through the cosmos. The crackling vibration you sense is the arrival of eclipse season once again. November ends with a lunar eclipse in yet another area—your domestic sector (solar fourth house). Many Pisces could move at this time or be focused on an important home renovation. However, if this triggers a memorable event in your family, be sure to attend to it because it could shift your life forever.",
            },
            {
                id: 5,
                description: "A mix of illusion and reality shapes your year. Your home planet Neptune supports your idealistic approach to life, and because it’s traveling in your escapist sign all year, this is the time to really dream big. Pay attention to intuition and visions – your subconscious is an accurate window into your soul and what you truly want this year. Neptune’s retrograde period occurs from late June until the end of November, however, which can cause all your daydreams to come crashing down. Having the soft, pillowy layers of plausible deniability you’ve built around you can be unnerving, and you won’t want to face the realities that slowly creep in. You’re tougher than you seem though, Pisces, so having to face the music can be a blessing in disguise. The sun will be floating through your imaginative sign from the end of February until the end of March, so happy birthday to you creative, romantic Pisces! You thrive living in your dream world, and you crave solitude to contemplate all of life’s “what ifs.” Because you’re the last sign of the Zodiac and because this transit occurs during the Spring Equinox, this is a time to embrace the ending of one cycle and the beginning of a new one. Take a breather, Pisces, and regain your strength before it’s time to start all over again.",
            }]
    },
    {
        id: '1',
        link: '/sign/pisces/',
        name: 'Pisces',
        img: '/img/pisces.png',
        date: 'Feb 19 - Mar 20',
        descriptionGroup: [
            {
                id: 0,
                description: "You're likely to enjoy today's change of tone, Pisces. Don't you feel a need to take friendships beyond the superficial level? Perhaps you should reestablish contact with some former friends, too, although you may find that you have some bonds to repair. In any case, you can expect another month devoted to sweeping the cobwebs out of your emotional universe in order to let in sunlight and promise.",
            },
            {
                id: 1,
                description: "You're likely to enjoy today's change of tone, Pisces. Don't you feel a need to take friendships beyond the superficial level? Perhaps you should reestablish contact with some former friends, too, although you may find that you have some bonds to repair. In any case, you can expect another month devoted to sweeping the cobwebs out of your emotional universe in order to let in sunlight and promise.",
            },
            {
                id: 2,
                description: "You may have your mind set on some big plans that you've been working on for some time now, Pisces. The problem is that today there is some conflict with something or someone with a large ego who suddenly wants a piece of the pie. Either that or this person wants to burst your bubble. Don't give up hope on your dreams. Realize that this opposition is just part of the adventure.",

            },
            {
                id: 3,
                description: "Mercury is finally turning direct on Tuesday, but it’s still not all smooth sailing for you yet. Mercury will be in flighty Libra until next week, making it difficult for you to stay on topic or make a decision. If you have any big decisions that could change your life completely, you might want to save them for next week. Mercury will be in your intimacy sector for the rest of the week, encouraging you to take a step back and look at your mental process. How do you think about relationships? Why are taboos so taboo? These are the questions you should be asking yourself as you sink deeper into your mind. Then Mercury squares Saturn in Capricorn on Friday, causing some added stress and pressure in your life. Don’t try to suffer in silence. If you need help, Pisces, ask for it. Your friends have your back.",
            },
            {
                id: 4,
                description: "Your mind will be highly active in November despite the slower planetary pace, Pisces. A full moon at the end of October in your communication sector spills over into November, likely bringing to culmination an important writing, speaking, or contractual project (solar third house). Don’t rush it, though. Delay it until Mercury awakens on the November 3 and Mars turns direct ten days later. With the sun moving through your expansion sector throughout most of this month, you’ll be curious about moving in new directions (solar ninth house). While this would normally encourage you to travel overseas, you may instead be focused on going back to school or pursuing a publishing or media matter. When the new moon arrives on the fourteenth, a doorway could open for you to finally push forward what you seek. If you’re waiting for visa approval, you’ll likely get your answer at that time. An important shift for the month ahead occurs when the sun moves into your achievements sector on November 21 (solar tenth house). Your mind will surely be on your professional life for the weeks to come, especially with the electrical energy rippling through the cosmos. The crackling vibration you sense is the arrival of eclipse season once again. November ends with a lunar eclipse in yet another area—your domestic sector (solar fourth house). Many Pisces could move at this time or be focused on an important home renovation. However, if this triggers a memorable event in your family, be sure to attend to it because it could shift your life forever.",
            },
            {
                id: 5,
                description: "A mix of illusion and reality shapes your year. Your home planet Neptune supports your idealistic approach to life, and because it’s traveling in your escapist sign all year, this is the time to really dream big. Pay attention to intuition and visions – your subconscious is an accurate window into your soul and what you truly want this year. Neptune’s retrograde period occurs from late June until the end of November, however, which can cause all your daydreams to come crashing down. Having the soft, pillowy layers of plausible deniability you’ve built around you can be unnerving, and you won’t want to face the realities that slowly creep in. You’re tougher than you seem though, Pisces, so having to face the music can be a blessing in disguise. The sun will be floating through your imaginative sign from the end of February until the end of March, so happy birthday to you creative, romantic Pisces! You thrive living in your dream world, and you crave solitude to contemplate all of life’s “what ifs.” Because you’re the last sign of the Zodiac and because this transit occurs during the Spring Equinox, this is a time to embrace the ending of one cycle and the beginning of a new one. Take a breather, Pisces, and regain your strength before it’s time to start all over again.",
            }]
    },
    {
        id: '2',
        link: '/sign/aries/',
        name: 'Aries',
        img: '/img/aries.png',
        date: 'Mar 21 - Apr 19',
        descriptionGroup: [
            {
                id: 0,
                description: "You're likely to enjoy today's change of tone, Pisces. Don't you feel a need to take friendships beyond the superficial level? Perhaps you should reestablish contact with some former friends, too, although you may find that you have some bonds to repair. In any case, you can expect another month devoted to sweeping the cobwebs out of your emotional universe in order to let in sunlight and promise.",
            },
            {
                id: 1,
                description: "You're likely to enjoy today's change of tone, Pisces. Don't you feel a need to take friendships beyond the superficial level? Perhaps you should reestablish contact with some former friends, too, although you may find that you have some bonds to repair. In any case, you can expect another month devoted to sweeping the cobwebs out of your emotional universe in order to let in sunlight and promise.",
            },
            {
                id: 2,
                description: "You may have your mind set on some big plans that you've been working on for some time now, Pisces. The problem is that today there is some conflict with something or someone with a large ego who suddenly wants a piece of the pie. Either that or this person wants to burst your bubble. Don't give up hope on your dreams. Realize that this opposition is just part of the adventure.",

            },
            {
                id: 3,
                description: "Mercury is finally turning direct on Tuesday, but it’s still not all smooth sailing for you yet. Mercury will be in flighty Libra until next week, making it difficult for you to stay on topic or make a decision. If you have any big decisions that could change your life completely, you might want to save them for next week. Mercury will be in your intimacy sector for the rest of the week, encouraging you to take a step back and look at your mental process. How do you think about relationships? Why are taboos so taboo? These are the questions you should be asking yourself as you sink deeper into your mind. Then Mercury squares Saturn in Capricorn on Friday, causing some added stress and pressure in your life. Don’t try to suffer in silence. If you need help, Pisces, ask for it. Your friends have your back.",
            },
            {
                id: 4,
                description: "Your mind will be highly active in November despite the slower planetary pace, Pisces. A full moon at the end of October in your communication sector spills over into November, likely bringing to culmination an important writing, speaking, or contractual project (solar third house). Don’t rush it, though. Delay it until Mercury awakens on the November 3 and Mars turns direct ten days later. With the sun moving through your expansion sector throughout most of this month, you’ll be curious about moving in new directions (solar ninth house). While this would normally encourage you to travel overseas, you may instead be focused on going back to school or pursuing a publishing or media matter. When the new moon arrives on the fourteenth, a doorway could open for you to finally push forward what you seek. If you’re waiting for visa approval, you’ll likely get your answer at that time. An important shift for the month ahead occurs when the sun moves into your achievements sector on November 21 (solar tenth house). Your mind will surely be on your professional life for the weeks to come, especially with the electrical energy rippling through the cosmos. The crackling vibration you sense is the arrival of eclipse season once again. November ends with a lunar eclipse in yet another area—your domestic sector (solar fourth house). Many Pisces could move at this time or be focused on an important home renovation. However, if this triggers a memorable event in your family, be sure to attend to it because it could shift your life forever.",
            },
            {
                id: 5,
                description: "A mix of illusion and reality shapes your year. Your home planet Neptune supports your idealistic approach to life, and because it’s traveling in your escapist sign all year, this is the time to really dream big. Pay attention to intuition and visions – your subconscious is an accurate window into your soul and what you truly want this year. Neptune’s retrograde period occurs from late June until the end of November, however, which can cause all your daydreams to come crashing down. Having the soft, pillowy layers of plausible deniability you’ve built around you can be unnerving, and you won’t want to face the realities that slowly creep in. You’re tougher than you seem though, Pisces, so having to face the music can be a blessing in disguise. The sun will be floating through your imaginative sign from the end of February until the end of March, so happy birthday to you creative, romantic Pisces! You thrive living in your dream world, and you crave solitude to contemplate all of life’s “what ifs.” Because you’re the last sign of the Zodiac and because this transit occurs during the Spring Equinox, this is a time to embrace the ending of one cycle and the beginning of a new one. Take a breather, Pisces, and regain your strength before it’s time to start all over again.",
            }]
    },
    {
        id: '3',
        link: '/sign/taurus/',
        name: 'Taurus',
        img: '/img/taurus.png',
        date: 'Apr 20 - May 20',
        descriptionGroup: [
            {
                id: 0,
                description: "You're likely to enjoy today's change of tone, Pisces. Don't you feel a need to take friendships beyond the superficial level? Perhaps you should reestablish contact with some former friends, too, although you may find that you have some bonds to repair. In any case, you can expect another month devoted to sweeping the cobwebs out of your emotional universe in order to let in sunlight and promise.",
            },
            {
                id: 1,
                description: "You're likely to enjoy today's change of tone, Pisces. Don't you feel a need to take friendships beyond the superficial level? Perhaps you should reestablish contact with some former friends, too, although you may find that you have some bonds to repair. In any case, you can expect another month devoted to sweeping the cobwebs out of your emotional universe in order to let in sunlight and promise.",
            },
            {
                id: 2,
                description: "You may have your mind set on some big plans that you've been working on for some time now, Pisces. The problem is that today there is some conflict with something or someone with a large ego who suddenly wants a piece of the pie. Either that or this person wants to burst your bubble. Don't give up hope on your dreams. Realize that this opposition is just part of the adventure.",

            },
            {
                id: 3,
                description: "Mercury is finally turning direct on Tuesday, but it’s still not all smooth sailing for you yet. Mercury will be in flighty Libra until next week, making it difficult for you to stay on topic or make a decision. If you have any big decisions that could change your life completely, you might want to save them for next week. Mercury will be in your intimacy sector for the rest of the week, encouraging you to take a step back and look at your mental process. How do you think about relationships? Why are taboos so taboo? These are the questions you should be asking yourself as you sink deeper into your mind. Then Mercury squares Saturn in Capricorn on Friday, causing some added stress and pressure in your life. Don’t try to suffer in silence. If you need help, Pisces, ask for it. Your friends have your back.",
            },
            {
                id: 4,
                description: "Your mind will be highly active in November despite the slower planetary pace, Pisces. A full moon at the end of October in your communication sector spills over into November, likely bringing to culmination an important writing, speaking, or contractual project (solar third house). Don’t rush it, though. Delay it until Mercury awakens on the November 3 and Mars turns direct ten days later. With the sun moving through your expansion sector throughout most of this month, you’ll be curious about moving in new directions (solar ninth house). While this would normally encourage you to travel overseas, you may instead be focused on going back to school or pursuing a publishing or media matter. When the new moon arrives on the fourteenth, a doorway could open for you to finally push forward what you seek. If you’re waiting for visa approval, you’ll likely get your answer at that time. An important shift for the month ahead occurs when the sun moves into your achievements sector on November 21 (solar tenth house). Your mind will surely be on your professional life for the weeks to come, especially with the electrical energy rippling through the cosmos. The crackling vibration you sense is the arrival of eclipse season once again. November ends with a lunar eclipse in yet another area—your domestic sector (solar fourth house). Many Pisces could move at this time or be focused on an important home renovation. However, if this triggers a memorable event in your family, be sure to attend to it because it could shift your life forever.",
            },
            {
                id: 5,
                description: "A mix of illusion and reality shapes your year. Your home planet Neptune supports your idealistic approach to life, and because it’s traveling in your escapist sign all year, this is the time to really dream big. Pay attention to intuition and visions – your subconscious is an accurate window into your soul and what you truly want this year. Neptune’s retrograde period occurs from late June until the end of November, however, which can cause all your daydreams to come crashing down. Having the soft, pillowy layers of plausible deniability you’ve built around you can be unnerving, and you won’t want to face the realities that slowly creep in. You’re tougher than you seem though, Pisces, so having to face the music can be a blessing in disguise. The sun will be floating through your imaginative sign from the end of February until the end of March, so happy birthday to you creative, romantic Pisces! You thrive living in your dream world, and you crave solitude to contemplate all of life’s “what ifs.” Because you’re the last sign of the Zodiac and because this transit occurs during the Spring Equinox, this is a time to embrace the ending of one cycle and the beginning of a new one. Take a breather, Pisces, and regain your strength before it’s time to start all over again.",
            }]
    },
    {
        id: '4',
        link: '/sign/gemini/',
        name: 'Gemini',
        img: '/img/gemini.png',
        date: 'May 21 - Jun 20',
        descriptionGroup: [
            {
                id: 0,
                description: "You're likely to enjoy today's change of tone, Pisces. Don't you feel a need to take friendships beyond the superficial level? Perhaps you should reestablish contact with some former friends, too, although you may find that you have some bonds to repair. In any case, you can expect another month devoted to sweeping the cobwebs out of your emotional universe in order to let in sunlight and promise.",
            },
            {
                id: 1,
                description: "You're likely to enjoy today's change of tone, Pisces. Don't you feel a need to take friendships beyond the superficial level? Perhaps you should reestablish contact with some former friends, too, although you may find that you have some bonds to repair. In any case, you can expect another month devoted to sweeping the cobwebs out of your emotional universe in order to let in sunlight and promise.",
            },
            {
                id: 2,
                description: "You may have your mind set on some big plans that you've been working on for some time now, Pisces. The problem is that today there is some conflict with something or someone with a large ego who suddenly wants a piece of the pie. Either that or this person wants to burst your bubble. Don't give up hope on your dreams. Realize that this opposition is just part of the adventure.",

            },
            {
                id: 3,
                description: "Mercury is finally turning direct on Tuesday, but it’s still not all smooth sailing for you yet. Mercury will be in flighty Libra until next week, making it difficult for you to stay on topic or make a decision. If you have any big decisions that could change your life completely, you might want to save them for next week. Mercury will be in your intimacy sector for the rest of the week, encouraging you to take a step back and look at your mental process. How do you think about relationships? Why are taboos so taboo? These are the questions you should be asking yourself as you sink deeper into your mind. Then Mercury squares Saturn in Capricorn on Friday, causing some added stress and pressure in your life. Don’t try to suffer in silence. If you need help, Pisces, ask for it. Your friends have your back.",
            },
            {
                id: 4,
                description: "Your mind will be highly active in November despite the slower planetary pace, Pisces. A full moon at the end of October in your communication sector spills over into November, likely bringing to culmination an important writing, speaking, or contractual project (solar third house). Don’t rush it, though. Delay it until Mercury awakens on the November 3 and Mars turns direct ten days later. With the sun moving through your expansion sector throughout most of this month, you’ll be curious about moving in new directions (solar ninth house). While this would normally encourage you to travel overseas, you may instead be focused on going back to school or pursuing a publishing or media matter. When the new moon arrives on the fourteenth, a doorway could open for you to finally push forward what you seek. If you’re waiting for visa approval, you’ll likely get your answer at that time. An important shift for the month ahead occurs when the sun moves into your achievements sector on November 21 (solar tenth house). Your mind will surely be on your professional life for the weeks to come, especially with the electrical energy rippling through the cosmos. The crackling vibration you sense is the arrival of eclipse season once again. November ends with a lunar eclipse in yet another area—your domestic sector (solar fourth house). Many Pisces could move at this time or be focused on an important home renovation. However, if this triggers a memorable event in your family, be sure to attend to it because it could shift your life forever.",
            },
            {
                id: 5,
                description: "A mix of illusion and reality shapes your year. Your home planet Neptune supports your idealistic approach to life, and because it’s traveling in your escapist sign all year, this is the time to really dream big. Pay attention to intuition and visions – your subconscious is an accurate window into your soul and what you truly want this year. Neptune’s retrograde period occurs from late June until the end of November, however, which can cause all your daydreams to come crashing down. Having the soft, pillowy layers of plausible deniability you’ve built around you can be unnerving, and you won’t want to face the realities that slowly creep in. You’re tougher than you seem though, Pisces, so having to face the music can be a blessing in disguise. The sun will be floating through your imaginative sign from the end of February until the end of March, so happy birthday to you creative, romantic Pisces! You thrive living in your dream world, and you crave solitude to contemplate all of life’s “what ifs.” Because you’re the last sign of the Zodiac and because this transit occurs during the Spring Equinox, this is a time to embrace the ending of one cycle and the beginning of a new one. Take a breather, Pisces, and regain your strength before it’s time to start all over again.",
            }]
    },
    {
        id: '5',
        link: '/sign/cancer/',
        name: 'Cancer',
        img: '/img/cancer.png',
        date: 'Jun 21 - Jul 22',
        descriptionGroup: [
            {
                id: 0,
                description: "You're likely to enjoy today's change of tone, Pisces. Don't you feel a need to take friendships beyond the superficial level? Perhaps you should reestablish contact with some former friends, too, although you may find that you have some bonds to repair. In any case, you can expect another month devoted to sweeping the cobwebs out of your emotional universe in order to let in sunlight and promise.",
            },
            {
                id: 1,
                description: "You're likely to enjoy today's change of tone, Pisces. Don't you feel a need to take friendships beyond the superficial level? Perhaps you should reestablish contact with some former friends, too, although you may find that you have some bonds to repair. In any case, you can expect another month devoted to sweeping the cobwebs out of your emotional universe in order to let in sunlight and promise.",
            },
            {
                id: 2,
                description: "You may have your mind set on some big plans that you've been working on for some time now, Pisces. The problem is that today there is some conflict with something or someone with a large ego who suddenly wants a piece of the pie. Either that or this person wants to burst your bubble. Don't give up hope on your dreams. Realize that this opposition is just part of the adventure.",

            },
            {
                id: 3,
                description: "Mercury is finally turning direct on Tuesday, but it’s still not all smooth sailing for you yet. Mercury will be in flighty Libra until next week, making it difficult for you to stay on topic or make a decision. If you have any big decisions that could change your life completely, you might want to save them for next week. Mercury will be in your intimacy sector for the rest of the week, encouraging you to take a step back and look at your mental process. How do you think about relationships? Why are taboos so taboo? These are the questions you should be asking yourself as you sink deeper into your mind. Then Mercury squares Saturn in Capricorn on Friday, causing some added stress and pressure in your life. Don’t try to suffer in silence. If you need help, Pisces, ask for it. Your friends have your back.",
            },
            {
                id: 4,
                description: "Your mind will be highly active in November despite the slower planetary pace, Pisces. A full moon at the end of October in your communication sector spills over into November, likely bringing to culmination an important writing, speaking, or contractual project (solar third house). Don’t rush it, though. Delay it until Mercury awakens on the November 3 and Mars turns direct ten days later. With the sun moving through your expansion sector throughout most of this month, you’ll be curious about moving in new directions (solar ninth house). While this would normally encourage you to travel overseas, you may instead be focused on going back to school or pursuing a publishing or media matter. When the new moon arrives on the fourteenth, a doorway could open for you to finally push forward what you seek. If you’re waiting for visa approval, you’ll likely get your answer at that time. An important shift for the month ahead occurs when the sun moves into your achievements sector on November 21 (solar tenth house). Your mind will surely be on your professional life for the weeks to come, especially with the electrical energy rippling through the cosmos. The crackling vibration you sense is the arrival of eclipse season once again. November ends with a lunar eclipse in yet another area—your domestic sector (solar fourth house). Many Pisces could move at this time or be focused on an important home renovation. However, if this triggers a memorable event in your family, be sure to attend to it because it could shift your life forever.",
            },
            {
                id: 5,
                description: "A mix of illusion and reality shapes your year. Your home planet Neptune supports your idealistic approach to life, and because it’s traveling in your escapist sign all year, this is the time to really dream big. Pay attention to intuition and visions – your subconscious is an accurate window into your soul and what you truly want this year. Neptune’s retrograde period occurs from late June until the end of November, however, which can cause all your daydreams to come crashing down. Having the soft, pillowy layers of plausible deniability you’ve built around you can be unnerving, and you won’t want to face the realities that slowly creep in. You’re tougher than you seem though, Pisces, so having to face the music can be a blessing in disguise. The sun will be floating through your imaginative sign from the end of February until the end of March, so happy birthday to you creative, romantic Pisces! You thrive living in your dream world, and you crave solitude to contemplate all of life’s “what ifs.” Because you’re the last sign of the Zodiac and because this transit occurs during the Spring Equinox, this is a time to embrace the ending of one cycle and the beginning of a new one. Take a breather, Pisces, and regain your strength before it’s time to start all over again.",
            }]
    },
    {
        id: '6',
        link: '/sign/leo/',
        name: 'Leo',
        img: '/img/leo.png',
        date: 'Jul 23 - Aug 22',
        descriptionGroup: [
            {
                id: 0,
                description: "You're likely to enjoy today's change of tone, Pisces. Don't you feel a need to take friendships beyond the superficial level? Perhaps you should reestablish contact with some former friends, too, although you may find that you have some bonds to repair. In any case, you can expect another month devoted to sweeping the cobwebs out of your emotional universe in order to let in sunlight and promise.",
            },
            {
                id: 1,
                description: "You're likely to enjoy today's change of tone, Pisces. Don't you feel a need to take friendships beyond the superficial level? Perhaps you should reestablish contact with some former friends, too, although you may find that you have some bonds to repair. In any case, you can expect another month devoted to sweeping the cobwebs out of your emotional universe in order to let in sunlight and promise.",
            },
            {
                id: 2,
                description: "You may have your mind set on some big plans that you've been working on for some time now, Pisces. The problem is that today there is some conflict with something or someone with a large ego who suddenly wants a piece of the pie. Either that or this person wants to burst your bubble. Don't give up hope on your dreams. Realize that this opposition is just part of the adventure.",

            },
            {
                id: 3,
                description: "Mercury is finally turning direct on Tuesday, but it’s still not all smooth sailing for you yet. Mercury will be in flighty Libra until next week, making it difficult for you to stay on topic or make a decision. If you have any big decisions that could change your life completely, you might want to save them for next week. Mercury will be in your intimacy sector for the rest of the week, encouraging you to take a step back and look at your mental process. How do you think about relationships? Why are taboos so taboo? These are the questions you should be asking yourself as you sink deeper into your mind. Then Mercury squares Saturn in Capricorn on Friday, causing some added stress and pressure in your life. Don’t try to suffer in silence. If you need help, Pisces, ask for it. Your friends have your back.",
            },
            {
                id: 4,
                description: "Your mind will be highly active in November despite the slower planetary pace, Pisces. A full moon at the end of October in your communication sector spills over into November, likely bringing to culmination an important writing, speaking, or contractual project (solar third house). Don’t rush it, though. Delay it until Mercury awakens on the November 3 and Mars turns direct ten days later. With the sun moving through your expansion sector throughout most of this month, you’ll be curious about moving in new directions (solar ninth house). While this would normally encourage you to travel overseas, you may instead be focused on going back to school or pursuing a publishing or media matter. When the new moon arrives on the fourteenth, a doorway could open for you to finally push forward what you seek. If you’re waiting for visa approval, you’ll likely get your answer at that time. An important shift for the month ahead occurs when the sun moves into your achievements sector on November 21 (solar tenth house). Your mind will surely be on your professional life for the weeks to come, especially with the electrical energy rippling through the cosmos. The crackling vibration you sense is the arrival of eclipse season once again. November ends with a lunar eclipse in yet another area—your domestic sector (solar fourth house). Many Pisces could move at this time or be focused on an important home renovation. However, if this triggers a memorable event in your family, be sure to attend to it because it could shift your life forever.",
            },
            {
                id: 5,
                description: "A mix of illusion and reality shapes your year. Your home planet Neptune supports your idealistic approach to life, and because it’s traveling in your escapist sign all year, this is the time to really dream big. Pay attention to intuition and visions – your subconscious is an accurate window into your soul and what you truly want this year. Neptune’s retrograde period occurs from late June until the end of November, however, which can cause all your daydreams to come crashing down. Having the soft, pillowy layers of plausible deniability you’ve built around you can be unnerving, and you won’t want to face the realities that slowly creep in. You’re tougher than you seem though, Pisces, so having to face the music can be a blessing in disguise. The sun will be floating through your imaginative sign from the end of February until the end of March, so happy birthday to you creative, romantic Pisces! You thrive living in your dream world, and you crave solitude to contemplate all of life’s “what ifs.” Because you’re the last sign of the Zodiac and because this transit occurs during the Spring Equinox, this is a time to embrace the ending of one cycle and the beginning of a new one. Take a breather, Pisces, and regain your strength before it’s time to start all over again.",
            }]
    },
    {
        id: '7',
        link: '/sign/virgo/',
        name: 'Virgo',
        img: '/img/virgo.png',
        date: 'Aug 23 - Sep 22',
        descriptionGroup: [
            {
                id: 0,
                description: "You're likely to enjoy today's change of tone, Pisces. Don't you feel a need to take friendships beyond the superficial level? Perhaps you should reestablish contact with some former friends, too, although you may find that you have some bonds to repair. In any case, you can expect another month devoted to sweeping the cobwebs out of your emotional universe in order to let in sunlight and promise.",
            },
            {
                id: 1,
                description: "You're likely to enjoy today's change of tone, Pisces. Don't you feel a need to take friendships beyond the superficial level? Perhaps you should reestablish contact with some former friends, too, although you may find that you have some bonds to repair. In any case, you can expect another month devoted to sweeping the cobwebs out of your emotional universe in order to let in sunlight and promise.",
            },
            {
                id: 2,
                description: "You may have your mind set on some big plans that you've been working on for some time now, Pisces. The problem is that today there is some conflict with something or someone with a large ego who suddenly wants a piece of the pie. Either that or this person wants to burst your bubble. Don't give up hope on your dreams. Realize that this opposition is just part of the adventure.",

            },
            {
                id: 3,
                description: "Mercury is finally turning direct on Tuesday, but it’s still not all smooth sailing for you yet. Mercury will be in flighty Libra until next week, making it difficult for you to stay on topic or make a decision. If you have any big decisions that could change your life completely, you might want to save them for next week. Mercury will be in your intimacy sector for the rest of the week, encouraging you to take a step back and look at your mental process. How do you think about relationships? Why are taboos so taboo? These are the questions you should be asking yourself as you sink deeper into your mind. Then Mercury squares Saturn in Capricorn on Friday, causing some added stress and pressure in your life. Don’t try to suffer in silence. If you need help, Pisces, ask for it. Your friends have your back.",
            },
            {
                id: 4,
                description: "Your mind will be highly active in November despite the slower planetary pace, Pisces. A full moon at the end of October in your communication sector spills over into November, likely bringing to culmination an important writing, speaking, or contractual project (solar third house). Don’t rush it, though. Delay it until Mercury awakens on the November 3 and Mars turns direct ten days later. With the sun moving through your expansion sector throughout most of this month, you’ll be curious about moving in new directions (solar ninth house). While this would normally encourage you to travel overseas, you may instead be focused on going back to school or pursuing a publishing or media matter. When the new moon arrives on the fourteenth, a doorway could open for you to finally push forward what you seek. If you’re waiting for visa approval, you’ll likely get your answer at that time. An important shift for the month ahead occurs when the sun moves into your achievements sector on November 21 (solar tenth house). Your mind will surely be on your professional life for the weeks to come, especially with the electrical energy rippling through the cosmos. The crackling vibration you sense is the arrival of eclipse season once again. November ends with a lunar eclipse in yet another area—your domestic sector (solar fourth house). Many Pisces could move at this time or be focused on an important home renovation. However, if this triggers a memorable event in your family, be sure to attend to it because it could shift your life forever.",
            },
            {
                id: 5,
                description: "A mix of illusion and reality shapes your year. Your home planet Neptune supports your idealistic approach to life, and because it’s traveling in your escapist sign all year, this is the time to really dream big. Pay attention to intuition and visions – your subconscious is an accurate window into your soul and what you truly want this year. Neptune’s retrograde period occurs from late June until the end of November, however, which can cause all your daydreams to come crashing down. Having the soft, pillowy layers of plausible deniability you’ve built around you can be unnerving, and you won’t want to face the realities that slowly creep in. You’re tougher than you seem though, Pisces, so having to face the music can be a blessing in disguise. The sun will be floating through your imaginative sign from the end of February until the end of March, so happy birthday to you creative, romantic Pisces! You thrive living in your dream world, and you crave solitude to contemplate all of life’s “what ifs.” Because you’re the last sign of the Zodiac and because this transit occurs during the Spring Equinox, this is a time to embrace the ending of one cycle and the beginning of a new one. Take a breather, Pisces, and regain your strength before it’s time to start all over again.",
            }]
    },
    {
        id: '8',
        link: '/sign/libra/',
        name: 'Libra',
        img: '/img/libra.png',
        date: 'Sep 23 - Oct 22',
        descriptionGroup: [
            {
                id: 0,
                description: "You're likely to enjoy today's change of tone, Pisces. Don't you feel a need to take friendships beyond the superficial level? Perhaps you should reestablish contact with some former friends, too, although you may find that you have some bonds to repair. In any case, you can expect another month devoted to sweeping the cobwebs out of your emotional universe in order to let in sunlight and promise.",
            },
            {
                id: 1,
                description: "You're likely to enjoy today's change of tone, Pisces. Don't you feel a need to take friendships beyond the superficial level? Perhaps you should reestablish contact with some former friends, too, although you may find that you have some bonds to repair. In any case, you can expect another month devoted to sweeping the cobwebs out of your emotional universe in order to let in sunlight and promise.",
            },
            {
                id: 2,
                description: "You may have your mind set on some big plans that you've been working on for some time now, Pisces. The problem is that today there is some conflict with something or someone with a large ego who suddenly wants a piece of the pie. Either that or this person wants to burst your bubble. Don't give up hope on your dreams. Realize that this opposition is just part of the adventure.",

            },
            {
                id: 3,
                description: "Mercury is finally turning direct on Tuesday, but it’s still not all smooth sailing for you yet. Mercury will be in flighty Libra until next week, making it difficult for you to stay on topic or make a decision. If you have any big decisions that could change your life completely, you might want to save them for next week. Mercury will be in your intimacy sector for the rest of the week, encouraging you to take a step back and look at your mental process. How do you think about relationships? Why are taboos so taboo? These are the questions you should be asking yourself as you sink deeper into your mind. Then Mercury squares Saturn in Capricorn on Friday, causing some added stress and pressure in your life. Don’t try to suffer in silence. If you need help, Pisces, ask for it. Your friends have your back.",
            },
            {
                id: 4,
                description: "Your mind will be highly active in November despite the slower planetary pace, Pisces. A full moon at the end of October in your communication sector spills over into November, likely bringing to culmination an important writing, speaking, or contractual project (solar third house). Don’t rush it, though. Delay it until Mercury awakens on the November 3 and Mars turns direct ten days later. With the sun moving through your expansion sector throughout most of this month, you’ll be curious about moving in new directions (solar ninth house). While this would normally encourage you to travel overseas, you may instead be focused on going back to school or pursuing a publishing or media matter. When the new moon arrives on the fourteenth, a doorway could open for you to finally push forward what you seek. If you’re waiting for visa approval, you’ll likely get your answer at that time. An important shift for the month ahead occurs when the sun moves into your achievements sector on November 21 (solar tenth house). Your mind will surely be on your professional life for the weeks to come, especially with the electrical energy rippling through the cosmos. The crackling vibration you sense is the arrival of eclipse season once again. November ends with a lunar eclipse in yet another area—your domestic sector (solar fourth house). Many Pisces could move at this time or be focused on an important home renovation. However, if this triggers a memorable event in your family, be sure to attend to it because it could shift your life forever.",
            },
            {
                id: 5,
                description: "A mix of illusion and reality shapes your year. Your home planet Neptune supports your idealistic approach to life, and because it’s traveling in your escapist sign all year, this is the time to really dream big. Pay attention to intuition and visions – your subconscious is an accurate window into your soul and what you truly want this year. Neptune’s retrograde period occurs from late June until the end of November, however, which can cause all your daydreams to come crashing down. Having the soft, pillowy layers of plausible deniability you’ve built around you can be unnerving, and you won’t want to face the realities that slowly creep in. You’re tougher than you seem though, Pisces, so having to face the music can be a blessing in disguise. The sun will be floating through your imaginative sign from the end of February until the end of March, so happy birthday to you creative, romantic Pisces! You thrive living in your dream world, and you crave solitude to contemplate all of life’s “what ifs.” Because you’re the last sign of the Zodiac and because this transit occurs during the Spring Equinox, this is a time to embrace the ending of one cycle and the beginning of a new one. Take a breather, Pisces, and regain your strength before it’s time to start all over again.",
            }]
    },
    {
        id: '9',
        link: '/sign/scorpio/',
        name: 'Scorpio',
        img: '/img/scorpio.png',
        date: 'Oct 23 - Nov 21',
        descriptionGroup: [
            {
                id: 0,
                description: "You're likely to enjoy today's change of tone, Pisces. Don't you feel a need to take friendships beyond the superficial level? Perhaps you should reestablish contact with some former friends, too, although you may find that you have some bonds to repair. In any case, you can expect another month devoted to sweeping the cobwebs out of your emotional universe in order to let in sunlight and promise.",
            },
            {
                id: 1,
                description: "You're likely to enjoy today's change of tone, Pisces. Don't you feel a need to take friendships beyond the superficial level? Perhaps you should reestablish contact with some former friends, too, although you may find that you have some bonds to repair. In any case, you can expect another month devoted to sweeping the cobwebs out of your emotional universe in order to let in sunlight and promise.",
            },
            {
                id: 2,
                description: "You may have your mind set on some big plans that you've been working on for some time now, Pisces. The problem is that today there is some conflict with something or someone with a large ego who suddenly wants a piece of the pie. Either that or this person wants to burst your bubble. Don't give up hope on your dreams. Realize that this opposition is just part of the adventure.",

            },
            {
                id: 3,
                description: "Mercury is finally turning direct on Tuesday, but it’s still not all smooth sailing for you yet. Mercury will be in flighty Libra until next week, making it difficult for you to stay on topic or make a decision. If you have any big decisions that could change your life completely, you might want to save them for next week. Mercury will be in your intimacy sector for the rest of the week, encouraging you to take a step back and look at your mental process. How do you think about relationships? Why are taboos so taboo? These are the questions you should be asking yourself as you sink deeper into your mind. Then Mercury squares Saturn in Capricorn on Friday, causing some added stress and pressure in your life. Don’t try to suffer in silence. If you need help, Pisces, ask for it. Your friends have your back.",
            },
            {
                id: 4,
                description: "Your mind will be highly active in November despite the slower planetary pace, Pisces. A full moon at the end of October in your communication sector spills over into November, likely bringing to culmination an important writing, speaking, or contractual project (solar third house). Don’t rush it, though. Delay it until Mercury awakens on the November 3 and Mars turns direct ten days later. With the sun moving through your expansion sector throughout most of this month, you’ll be curious about moving in new directions (solar ninth house). While this would normally encourage you to travel overseas, you may instead be focused on going back to school or pursuing a publishing or media matter. When the new moon arrives on the fourteenth, a doorway could open for you to finally push forward what you seek. If you’re waiting for visa approval, you’ll likely get your answer at that time. An important shift for the month ahead occurs when the sun moves into your achievements sector on November 21 (solar tenth house). Your mind will surely be on your professional life for the weeks to come, especially with the electrical energy rippling through the cosmos. The crackling vibration you sense is the arrival of eclipse season once again. November ends with a lunar eclipse in yet another area—your domestic sector (solar fourth house). Many Pisces could move at this time or be focused on an important home renovation. However, if this triggers a memorable event in your family, be sure to attend to it because it could shift your life forever.",
            },
            {
                id: 5,
                description: "A mix of illusion and reality shapes your year. Your home planet Neptune supports your idealistic approach to life, and because it’s traveling in your escapist sign all year, this is the time to really dream big. Pay attention to intuition and visions – your subconscious is an accurate window into your soul and what you truly want this year Neptune’s retrograde period occurs from late June until the end of November, however, which can cause all your daydreams to come crashing down. Having the soft, pillowy layers of plausible deniability you’ve built around you can be unnerving, and you won’t want to face the realities that slowly creep in. You’re tougher than you seem though, Pisces, so having to face the music can be a blessing in disguise. The sun will be floating through your imaginative sign from the end of February until the end of March, so happy birthday to you creative, romantic Pisces! You thrive living in your dream world, and you crave solitude to contemplate all of life’s “what ifs.” Because you’re the last sign of the Zodiac and because this transit occurs during the Spring Equinox, this is a time to embrace the ending of one cycle and the beginning of a new one. Take a breather, Pisces, and regain your strength before it’s time to start all over again.",
            }]
    },
    {
        id: '10',
        link: '/sign/sagittarius/',
        name: 'Sagittarius',
        img: '/img/sagittarius.png',
        date: 'Nov 22 - Dec 21',
        descriptionGroup: [
            {
                id: 0,
                description: "You're likely to enjoy today's change of tone, Pisces. Don't you feel a need to take friendships beyond the superficial level? Perhaps you should reestablish contact with some former friends, too, although you may find that you have some bonds to repair. In any case, you can expect another month devoted to sweeping the cobwebs out of your emotional universe in order to let in sunlight and promise.",
            },
            {
                id: 1,
                description: "You're likely to enjoy today's change of tone, Pisces. Don't you feel a need to take friendships beyond the superficial level? Perhaps you should reestablish contact with some former friends, too, although you may find that you have some bonds to repair. In any case, you can expect another month devoted to sweeping the cobwebs out of your emotional universe in order to let in sunlight and promise.",
            },
            {
                id: 2,
                description: "You may have your mind set on some big plans that you've been working on for some time now, Pisces. The problem is that today there is some conflict with something or someone with a large ego who suddenly wants a piece of the pie. Either that or this person wants to burst your bubble. Don't give up hope on your dreams. Realize that this opposition is just part of the adventure.",

            },
            {
                id: 3,
                description: "Mercury is finally turning direct on Tuesday, but it’s still not all smooth sailing for you yet. Mercury will be in flighty Libra until next week, making it difficult for you to stay on topic or make a decision. If you have any big decisions that could change your life completely, you might want to save them for next week. Mercury will be in your intimacy sector for the rest of the week, encouraging you to take a step back and look at your mental process. How do you think about relationships? Why are taboos so taboo? These are the questions you should be asking yourself as you sink deeper into your mind. Then Mercury squares Saturn in Capricorn on Friday, causing some added stress and pressure in your life. Don’t try to suffer in silence. If you need help, Pisces, ask for it. Your friends have your back.",
            },
            {
                id: 4,
                description: "Your mind will be highly active in November despite the slower planetary pace, Pisces. A full moon at the end of October in your communication sector spills over into November, likely bringing to culmination an important writing, speaking, or contractual project (solar third house). Don’t rush it, though. Delay it until Mercury awakens on the November 3 and Mars turns direct ten days later. With the sun moving through your expansion sector throughout most of this month, you’ll be curious about moving in new directions (solar ninth house). While this would normally encourage you to travel overseas, you may instead be focused on going back to school or pursuing a publishing or media matter. When the new moon arrives on the fourteenth, a doorway could open for you to finally push forward what you seek. If you’re waiting for visa approval, you’ll likely get your answer at that time. An important shift for the month ahead occurs when the sun moves into your achievements sector on November 21 (solar tenth house). Your mind will surely be on your professional life for the weeks to come, especially with the electrical energy rippling through the cosmos. The crackling vibration you sense is the arrival of eclipse season once again. November ends with a lunar eclipse in yet another area—your domestic sector (solar fourth house). Many Pisces could move at this time or be focused on an important home renovation. However, if this triggers a memorable event in your family, be sure to attend to it because it could shift your life forever.",
            },
            {
                id: 5,
                description: "A mix of illusion and reality shapes your year. Your home planet Neptune supports your idealistic approach to life, and because it’s traveling in your escapist sign all year, this is the time to really dream big. Pay attention to intuition and visions – your subconscious is an accurate window into your soul and what you truly want this year. Neptune’s retrograde period occurs from late June until the end of November, however, which can cause all your daydreams to come crashing down. Having the soft, pillowy layers of plausible deniability you’ve built around you can be unnerving, and you won’t want to face the realities that slowly creep in. You’re tougher than you seem though, Pisces, so having to face the music can be a blessing in disguise. The sun will be floating through your imaginative sign from the end of February until the end of March, so happy birthday to you creative, romantic Pisces! You thrive living in your dream world, and you crave solitude to contemplate all of life’s “what ifs.” Because you’re the last sign of the Zodiac and because this transit occurs during the Spring Equinox, this is a time to embrace the ending of one cycle and the beginning of a new one. Take a breather, Pisces, and regain your strength before it’s time to start all over again."
            }]
    },
    {
        id: '11',
        link: '/sign/capricorn/',
        name: 'Capricorn',
        img: '/img/capricorn.png',
        date: 'Dec 22 - Jan 19',
        descriptionGroup: [
            {
                id: 0,
                description: "You're likely to enjoy today's change of tone, Pisces. Don't you feel a need to take friendships beyond the superficial level? Perhaps you should reestablish contact with some former friends, too, although you may find that you have some bonds to repair. In any case, you can expect another month devoted to sweeping the cobwebs out of your emotional universe in order to let in sunlight and promise.",
            },
            {
                id: 1,
                description: "You're likely to enjoy today's change of tone, Pisces. Don't you feel a need to take friendships beyond the superficial level? Perhaps you should reestablish contact with some former friends, too, although you may find that you have some bonds to repair. In any case, you can expect another month devoted to sweeping the cobwebs out of your emotional universe in order to let in sunlight and promise.",
            },
            {
                id: 2,
                description: "You may have your mind set on some big plans that you've been working on for some time now, Pisces. The problem is that today there is some conflict with something or someone with a large ego who suddenly wants a piece of the pie. Either that or this person wants to burst your bubble. Don't give up hope on your dreams. Realize that this opposition is just part of the adventure.",

            },
            {
                id: 3,
                description: "Mercury is finally turning direct on Tuesday, but it’s still not all smooth sailing for you yet. Mercury will be in flighty Libra until next week, making it difficult for you to stay on topic or make a decision. If you have any big decisions that could change your life completely, you might want to save them for next week Mercury will be in your intimacy sector for the rest of the week, encouraging you to take a step back and look at your mental process. How do you think about relationships? Why are taboos so taboo? These are the questions you should be asking yourself as you sink deeper into your mind. Then Mercury squares Saturn in Capricorn on Friday, causing some added stress and pressure in your life. Don’t try to suffer in silence. If you need help, Pisces, ask for it. Your friends have your back.",
            },
            {
                id: 4,
                description: "Your mind will be highly active in November despite the slower planetary pace, Pisces. A full moon at the end of October in your communication sector spills over into November, likely bringing to culmination an important writing, speaking, or contractual project (solar third house). Don’t rush it, though. Delay it until Mercury awakens on the November 3 and Mars turns direct ten days later. With the sun moving through your expansion sector throughout most of this month, you’ll be curious about moving in new directions (solar ninth house). While this would normally encourage you to travel overseas, you may instead be focused on going back to school or pursuing a publishing or media matter. When the new moon arrives on the fourteenth, a doorway could open for you to finally push forward what you seek. If you’re waiting for visa approval, you’ll likely get your answer at that time An important shift for the month ahead occurs when the sun moves into your achievements sector on November 21 (solar tenth house). Your mind will surely be on your professional life for the weeks to come, especially with the electrical energy rippling through the cosmos The crackling vibration you sense is the arrival of eclipse season once again. November ends with a lunar eclipse in yet another area—your domestic sector (solar fourth house). Many Pisces could move at this time or be focused on an important home renovation. However, if this triggers a memorable event in your family, be sure to attend to it because it could shift your life forever.",
            },
            {
                id: 5,
                description: "A mix of illusion and reality shapes your year. Your home planet Neptune supports your idealistic approach to life, and because it’s traveling in your escapist sign all year, this is the time to really dream big. Pay attention to intuition and visions – your subconscious is an accurate window into your soul and what you truly want this year. Neptune’s retrograde period occurs from late June until the end of November, however, which can cause all your daydreams to come crashing down. Having the soft, pillowy layers of plausible deniability you’ve built around you can be unnerving, and you won’t want to face the realities that slowly creep in. You’re tougher than you seem though, Pisces, so having to face the music can be a blessing in disguise. The sun will be floating through your imaginative sign from the end of February until the end of March, so happy birthday to you creative, romantic Pisces! You thrive living in your dream world, and you crave solitude to contemplate all of life’s “what ifs.” Because you’re the last sign of the Zodiac and because this transit occurs during the Spring Equinox, this is a time to embrace the ending of one cycle and the beginning of a new one. Take a breather, Pisces, and regain your strength before it’s time to start all over again.",
            }]
    }
];

const tabGroup = [
    {id: 0, value: '0', name: 'yesterday'},
    {id: 1, value: '1', name: 'today'},
    {id: 2, value: '2', name: 'tomorrow'},
    {id: 3, value: '3', name: 'weekly'},
    {id: 4, value: '4', name: 'monthly'},
    {id: 5, value: '5', name: '2020'}
];
export {
    selectState,
    tabGroup,
    horoscopeSingData
}

