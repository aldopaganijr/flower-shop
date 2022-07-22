const SHOP_DATA = [
  {
    title: 'Sunday Morning',
    items: [
      {
      "id": 1,
      "name": "Sunday Sunrise",
      "imageUrl": "https://images.unsplash.com/photo-1558879860-45f24b366ea1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1181&q=80",
      "price": 80
      },
      {
      "id": 2,
      "name": "The Simple One",
      "imageUrl": "https://images.unsplash.com/photo-1606742602307-e9eaa3cf8107?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      "price": 70
      },
      {
      "id": 3,
      "name": "Breakfast in Bed",
      "imageUrl": "https://images.unsplash.com/photo-1588419651584-daa84922dd5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      "price": 60
      },
      {
      "id": 4,
      "name": "Screwdriver",
      "imageUrl": "https://images.unsplash.com/photo-1612198054914-73767426e046?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80",
      "price": 60
      },
      {
      "id": 5,
      "name": "Vivid Dreams",
      "imageUrl": "https://images.unsplash.com/photo-1562180457-6663a4fc4e74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
      "price": 70
      },
      {
      "id": 6,
      "name": "Bed & Breakfast",
      "imageUrl": "https://images.unsplash.com/photo-1452827073306-6e6e661baf57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
      "price": 100
      },
    ],
  },
  {
    title: 'Young Love',
    items: [
      {
        id: 7,
        name: 'Capri Love',
        imageUrl: 'https://images.unsplash.com/photo-1558594278-e45f60d17fe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
        price: 80,
      },
      {
        id: 8,
        name: 'Summer Camp',
        imageUrl: 'https://images.unsplash.com/photo-1540635352372-c21b523a29c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
        price: 70,
      },
      {
        id: 9,
        name: 'Love You',
        imageUrl: 'https://images.unsplash.com/photo-1509235029464-3a00a743581f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        price: 60,
      },
      {
        id: 10,
        name: 'Tequila Sunrise',
        imageUrl: 'https://images.unsplash.com/photo-1601131699703-57785a13f8de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
        price: 60,
      },
      {
        id: 11,
        name: 'Dream Sea',
        imageUrl: 'https://images.unsplash.com/photo-1456415333674-42b11b9f5b7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        price: 70,
      },
      {
        id: 12,
        name: 'Tamarindo Sun',
        imageUrl: 'https://images.unsplash.com/photo-1502164980785-f8aa41d53611?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        price: 100,
      },
    ],
  },
  {
    title: 'Date Night',
    items: [
      {
        id: 13,
        name: 'Mystery',
        imageUrl: 'https://images.unsplash.com/photo-1532152562158-bb5400e012f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU1fHxmbG93ZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        price: 80,
      },
      {
        id: 14,
        name: 'Dawn',
        imageUrl: 'https://images.unsplash.com/photo-1612351641432-20a0f196086c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=786&q=80',
        price: 70,
      },
      {
        id: 15,
        name: 'Red Dress',
        imageUrl: 'https://images.unsplash.com/photo-1613052271194-5427710fb39d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODZ8fGZsb3dlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        price: 60,
      },
      {
        id: 16,
        name: 'First Time',
        imageUrl: 'https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
        price: 60,
      },
      {
        id: 17,
        name: 'Special Moments',
        imageUrl: 'https://images.unsplash.com/photo-1558172474-9c7c194c7d06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80',
        price: 70,
      },
      {
        id: 18,
        name: 'Puppy Love',
        imageUrl: 'https://images.unsplash.com/photo-1525253761675-21367a7f975b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80',
        price: 100,
      },
    ],
  },
  {
    title: 'House Love',
    items: [
      {
        id: 19,
        name: 'Emotions',
        imageUrl: 'https://images.unsplash.com/photo-1560238786-aa5717f6ba63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fGZsb3dlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        price: 80,
      },
      {
        id: 20,
        name: 'Joy',
        imageUrl: 'https://images.unsplash.com/photo-1582794543462-0d7922e50cf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80',
        price: 70,
      },
      {
        id: 21,
        name: 'Breath',
        imageUrl: 'https://images.unsplash.com/photo-1612662227564-982c079252bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1014&q=80',
        price: 60,
      },
      {
        id: 22,
        name: 'Love',
        imageUrl: 'https://images.unsplash.com/photo-1539622230226-3d4eb483b3f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
        price: 60,
      },
      {
        id: 23,
        name: 'Spiral',
        imageUrl: 'https://images.unsplash.com/photo-1533467915241-eac02e856653?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        price: 70,
      },
      {
        id: 24,
        name: 'Peachy',
        imageUrl: 'https://images.unsplash.com/photo-1607324531834-04b6e0e871f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
        price: 100     
       },
      ],
    },
    {
      title: 'Moments',
      items: [
        {
          id: 25,
          name: 'Gratitude',
          imageUrl: 'https://images.unsplash.com/photo-1501577316686-a5cbf6c1df7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
          price: 80,
        },
        {
          id: 26,
          name: 'Appreciation',
          imageUrl: 'https://images.unsplash.com/photo-1442458017215-285b83f65851?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
          price: 70,
        },
        {
          id: 27,
          name: 'Recognition',
          imageUrl: 'https://images.unsplash.com/photo-1613542231149-63eb74d8b4ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80',
          price: 60,
        },
        {
          id: 28,
          name: 'Congratulations',
          imageUrl: 'https://images.unsplash.com/photo-1579645899072-e14c6b840afa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
          price: 60,
        },
        {
          id: 29,
          name: 'Acknowledgment',
          imageUrl: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
          price: 70,
        },
        {
          id: 30,
          name: 'Acceptance',
          imageUrl: 'https://images.unsplash.com/photo-1599253762493-89abe6de866c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
          price: 100  
        },
      ],
    },
  ];

  export default SHOP_DATA;
      