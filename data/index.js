export const queryData = [
  {
    query: "SELECT * FROM Barang;",
    result: [
      {
       "Kode_Barang": "A001",
       "Nama_Barang": "Rinso",
       "Satuan": "Pcs",
       "Harga": 5000
      },
      {
       "Kode_Barang": "A002",
       "Nama_Barang": "Sabun Dove",
       "Satuan": "Pcs",
       "Harga": 5000
      },
      {
       "Kode_Barang": "A003",
       "Nama_Barang": "Sabun Lifeboy",
       "Satuan": "Pcs",
       "Harga": 3000
      },
      {
       "Kode_Barang": "A004",
       "Nama_Barang": "Sabun Give",
       "Satuan": "Pcs",
       "Harga": 3000
      },
      {
       "Kode_Barang": "A005",
       "Nama_Barang": "Sabun Ekonomi",
       "Satuan": "Pcs",
       "Harga": 5000
      },
      {
       "Kode_Barang": "A006",
       "Nama_Barang": "Pepsodent",
       "Satuan": "Pcs",
       "Harga": 8000
      },
      {
       "Kode_Barang": "A007",
       "Nama_Barang": "Sampo Clear",
       "Satuan": "Pcs",
       "Harga": 12000
      },
      {
       "Kode_Barang": "A008",
       "Nama_Barang": "Sampo Pantene",
       "Satuan": "Pcs",
       "Harga": 12000
      },
      {
       "Kode_Barang": "A009",
       "Nama_Barang": "Sampo Sunsilk",
       "Satuan": "Pcs",
       "Harga": 12000
      },
     ],
  },

  {
    query: "SELECT * FROM Barang WHERE Harga=12000;",
    result: [
       {
        "Kode_Barang": "A007",
        "Nama_Barang": "Sampo Clear",
        "Satuan": "Pcs",
        "Harga": 12000
       },
       {
        "Kode_Barang": "A008",
        "Nama_Barang": "Sampo Pantene",
        "Satuan": "Pcs",
        "Harga": 12000
       },
       {
        "Kode_Barang": "A009",
        "Nama_Barang": "Sampo Sunsilk",
        "Satuan": "Pcs",
        "Harga": 12000
       },
      ],

  },

  {
    query: "SELECT Satuan, Harga FROM Barang;",
    result: [
      {
       "Satuan": "Pcs",
       "Harga": 5000
      },
      {
       "Satuan": "Pcs",
       "Harga": 5000
      },
      {
       "Satuan": "Pcs",
       "Harga": 3000
      },
      {
       "Satuan": "Pcs",
       "Harga": 3000
      },
      {
       "Satuan": "Pcs",
       "Harga": 5000
      },
      {
       "Satuan": "Pcs",
       "Harga": 8000
      },
      {
       "Satuan": "Pcs",
       "Harga": 12000
      },
      {
       "Satuan": "Pcs",
       "Harga": 12000
      },
      {
       "Satuan": "Pcs",
       "Harga": 12000
      },
     ],    
     },

  {
    query: "SELECT * FROM Transaksi;",
    result: [
      {
       "Kode_Barang": "A001",
       "Nama_Barang": "Rinso",
       "Satuan": "Pcs",
       "Jumlah": 10,
       "Subharga": 50000
      },
      {
       "Kode_Barang": "A003",
       "Nama_Barang": "Sabun Lifeboy",
       "Satuan": "Pcs",
       "Jumlah": 5,
       "Subharga": 15000
      },
      {
       "Kode_Barang": "A006",
       "Nama_Barang": "Pepsodent",
       "Satuan": "Pcs",
       "Jumlah": 4,
       "Subharga": 32000
      },
      {
       "Kode_Barang": "A007",
       "Nama_Barang": "Sampo Clear",
       "Satuan": "Pcs",
       "Jumlah": 2,
       "Subharga": 24000
      },
     ],
  },

  {
    query: "SELECT * FROM Barang INNER JOIN Transaksi;",
    result: [
      {
       "Kode_Barang": "A001",
       "Nama_Barang": "Rinso",
       "Satuan": "Pcs",
       "Harga": 5000,
       "Jumlah": 10,
       "Subharga": 50000
      },
      {
       "Kode_Barang": "A003",
       "Nama_Barang": "Sabun Lifeboy",
       "Satuan": "Pcs",
       "Harga": 3000,
       "Jumlah": 5,
       "Subharga": 15000
      },
      {
       "Kode_Barang": "A006",
       "Nama_Barang": "Pepsodent",
       "Satuan": "Pcs",
       "Harga": 8000,
       "Jumlah": 4,
       "Subharga": 32000
      },
      {
       "Kode_Barang": "A007",
       "Nama_Barang": "Sampo Clear",
       "Satuan": "Pcs",
       "Harga": 12000,
       "Jumlah": 2,
       "Subharga": 24000
      }
     ],    
    },

    {
      query: "SELECT Kode_Barang FROM Barang;",
      result: [
        {
         "Kode_Barang": "A001"
        },
        {
         "Kode_Barang": "A002"
        },
        {
         "Kode_Barang": "A003"
        },
        {
         "Kode_Barang": "A004"
        },
        {
         "Kode_Barang": "A005"
        },
        {
         "Kode_Barang": "A006"
        },
        {
         "Kode_Barang": "A007"
        },
        {
         "Kode_Barang": "A008"
        },
        {
         "Kode_Barang": "A009"
        }
       ],      
      },

      {
        query: "SELECT Kode_Barang, Nama_Barang FROM Barang;",
        result: [
          {
           "Kode_Barang": "A001",
           "Nama_Barang": "Rinso"
          },
          {
           "Kode_Barang": "A002",
           "Nama_Barang": "Sabun Dove"
          },
          {
           "Kode_Barang": "A003",
           "Nama_Barang": "Sabun Lifeboy"
          },
          {
           "Kode_Barang": "A004",
           "Nama_Barang": "Sabun Give"
          },
          {
           "Kode_Barang": "A005",
           "Nama_Barang": "Sabun Ekonomi"
          },
          {
           "Kode_Barang": "A006",
           "Nama_Barang": "Pepsodent"
          },
          {
           "Kode_Barang": "A007",
           "Nama_Barang": "Sampo Clear"
          },
          {
           "Kode_Barang": "A008",
           "Nama_Barang": "Sampo Pantene"
          },
          {
           "Kode_Barang": "A009",
           "Nama_Barang": "Sampo Sunsilk"
          },
         ],
        },

        {
          query: "SELECT Kode_Barang, Nama_Barang, Satuan FROM Barang;",
          result: [
            {
             "Kode_Barang": "A001",
             "Nama_Barang": "Rinso",
             "Satuan": "Pcs"
            },
            {
             "Kode_Barang": "A002",
             "Nama_Barang": "Sabun Dove",
             "Satuan": "Pcs"
            },
            {
             "Kode_Barang": "A003",
             "Nama_Barang": "Sabun Lifeboy",
             "Satuan": "Pcs"
            },
            {
             "Kode_Barang": "A004",
             "Nama_Barang": "Sabun Give",
             "Satuan": "Pcs"
            },
            {
             "Kode_Barang": "A005",
             "Nama_Barang": "Sabun Ekonomi",
             "Satuan": "Pcs"
            },
            {
             "Kode_Barang": "A006",
             "Nama_Barang": "Pepsodent",
             "Satuan": "Pcs"
            },
            {
             "Kode_Barang": "A007",
             "Nama_Barang": "Sampo Clear",
             "Satuan": "Pcs"
            },
            {
             "Kode_Barang": "A008",
             "Nama_Barang": "Sampo Pantene",
             "Satuan": "Pcs"
            },
            {
             "Kode_Barang": "A009",
             "Nama_Barang": "Sampo Sunsilk",
             "Satuan": "Pcs"
            }
           ],
          },

          {
            query: "SELECT Kode_Barang, Nama_Barang, Harga FROM Barang;",
            result: [
              {
               "Kode_Barang": "A001",
               "Nama_Barang": "Rinso",
               "Harga": 5000
              },
              {
               "Kode_Barang": "A002",
               "Nama_Barang": "Sabun Dove",
               "Harga": 5000
              },
              {
               "Kode_Barang": "A003",
               "Nama_Barang": "Sabun Lifeboy",
               "Harga": 3000
              },
              {
               "Kode_Barang": "A004",
               "Nama_Barang": "Sabun Give",
               "Harga": 3000
              },
              {
               "Kode_Barang": "A005",
               "Nama_Barang": "Sabun Ekonomi",
               "Harga": 5000
              },
              {
               "Kode_Barang": "A006",
               "Nama_Barang": "Pepsodent",
               "Harga": 8000
              },
              {
               "Kode_Barang": "A007",
               "Nama_Barang": "Sampo Clear",
               "Harga": 12000
              },
              {
               "Kode_Barang": "A008",
               "Nama_Barang": "Sampo Pantene",
               "Harga": 12000
              },
              {
               "Kode_Barang": "A009",
               "Nama_Barang": "Sampo Sunsilk",
               "Harga": 12000
              }
             ],
            },

            {
              query: "SELECT Nama_Barang, Satuan, Harga FROM Barang;",
              result: [
                {
                 "Nama_Barang": "Rinso",
                 "Satuan": "Pcs",
                 "Harga": 5000
                },
                {
                 "Nama_Barang": "Sabun Dove",
                 "Satuan": "Pcs",
                 "Harga": 5000
                },
                {
                 "Nama_Barang": "Sabun Lifeboy",
                 "Satuan": "Pcs",
                 "Harga": 3000
                },
                {
                 "Nama_Barang": "Sabun Give",
                 "Satuan": "Pcs",
                 "Harga": 3000
                },
                {
                 "Nama_Barang": "Sabun Ekonomi",
                 "Satuan": "Pcs",
                 "Harga": 5000
                },
                {
                 "Nama_Barang": "Pepsodent",
                 "Satuan": "Pcs",
                 "Harga": 8000
                },
                {
                 "Nama_Barang": "Sampo Clear",
                 "Satuan": "Pcs",
                 "Harga": 12000
                },
                {
                 "Nama_Barang": "Sampo Pantene",
                 "Satuan": "Pcs",
                 "Harga": 12000
                },
                {
                 "Nama_Barang": "Sampo Sunsilk",
                 "Satuan": "Pcs",
                 "Harga": 12000
                }
               ],
            },

            {
              query: "SELECT Kode_Barang, Satuan, Harga FROM Barang;",
              result: [
                {
                 "Kode_Barang": "A001",
                 "Satuan": "Pcs",
                 "Harga": 5000
                },
                {
                 "Kode_Barang": "A002",
                 "Satuan": "Pcs",
                 "Harga": 5000
                },
                {
                 "Kode_Barang": "A003",
                 "Satuan": "Pcs",
                 "Harga": 3000
                },
                {
                 "Kode_Barang": "A004",
                 "Satuan": "Pcs",
                 "Harga": 3000
                },
                {
                 "Kode_Barang": "A005",
                 "Satuan": "Pcs",
                 "Harga": 5000
                },
                {
                 "Kode_Barang": "A006",
                 "Satuan": "Pcs",
                 "Harga": 8000
                },
                {
                 "Kode_Barang": "A007",
                 "Satuan": "Pcs",
                 "Harga": 12000
                },
                {
                 "Kode_Barang": "A008",
                 "Satuan": "Pcs",
                 "Harga": 12000
                },
                {
                 "Kode_Barang": "A009",
                 "Satuan": "Pcs",
                 "Harga": 12000
                }
               ],
            },

            {
              query: "SELECT * FROM Barang WHERE Harga=5000;",
              result: [
                {
                 "Kode_Barang": "A001",
                 "Nama_Barang": "Rinso",
                 "Satuan": "Pcs",
                 "Harga": 5000
                },
                {
                 "Kode_Barang": "A002",
                 "Nama_Barang": "Sabun Dove",
                 "Satuan": "Pcs",
                 "Harga": 5000
                },
                {
                  "Kode_Barang": "A005",
                  "Nama_Barang": "Sabun Ekonomi",
                  "Satuan": "Pcs",
                  "Harga": 5000
                 }
               ],
            },

            {
              query: "SELECT * FROM Barang WHERE Harga=3000;",
              result: [
                {
                 "Kode_Barang": "A003",
                 "Nama_Barang": "Sabun Lifeboy",
                 "Satuan": "Pcs",
                 "Harga": 3000
                },
                {
                 "Kode_Barang": "A004",
                 "Nama_Barang": "Sabun Give",
                 "Satuan": "Pcs",
                 "Harga": 3000
                }
               ],
            },

            {
              query: "SELECT * FROM Barang WHERE Harga=8000;",
              result: [
                {
                 "Kode_Barang": "A006",
                 "Nama_Barang": "Pepsodent",
                 "Satuan": "Pcs",
                 "Harga": 8000
                }
               ], 
            },

            {
              query: "SELECT Kode_Barang FROM Transaksi;",
              result: [
                {
                 "Kode_Barang": "A001"
                },
                {
                 "Kode_Barang": "A003"
                },
                {
                 "Kode_Barang": "A006"
                },
                {
                 "Kode_Barang": "A007"
                }
               ],
            },

            {
              query: "SELECT Kode_Barang, Nama_Barang FROM Transaksi;",
              result: [
                {
                 "Kode_Barang": "A001",
                 "Nama_Barang": "Rinso"
                },
                {
                 "Kode_Barang": "A003",
                 "Nama_Barang": "Sabun Lifeboy"
                },
                {
                 "Kode_Barang": "A006",
                 "Nama_Barang": "Pepsodent"
                },
                {
                 "Kode_Barang": "A007",
                 "Nama_Barang": "Sampo Clear"
                }
               ], 
            },

            {
              query: "SELECT Kode_Barang, Nama_Barang, Satuan FROM Transaksi;",
              result: [
                {
                 "Kode_Barang": "A001",
                 "Nama_Barang": "Rinso",
                 "Satuan": "Pcs"
                },
                {
                 "Kode_Barang": "A003",
                 "Nama_Barang": "Sabun Lifeboy",
                 "Satuan": "Pcs"
                },
                {
                 "Kode_Barang": "A006",
                 "Nama_Barang": "Pepsodent",
                 "Satuan": "Pcs"
                },
                {
                 "Kode_Barang": "A007",
                 "Nama_Barang": "Sampo Clear",
                 "Satuan": "Pcs"
                }
               ],
            },

            {
              query: "SELECT Kode_Barang, Nama_Barang, Satuan, Jumlah FROM Transaksi;",
              result: [
                {
                 "Kode_Barang": "A001",
                 "Nama_Barang": "Rinso",
                 "Satuan": "Pcs",
                 "Jumlah": 10
                },
                {
                 "Kode_Barang": "A003",
                 "Nama_Barang": "Sabun Lifeboy",
                 "Satuan": "Pcs",
                 "Jumlah": 5
                },
                {
                 "Kode_Barang": "A006",
                 "Nama_Barang": "Pepsodent",
                 "Satuan": "Pcs",
                 "Jumlah": 4
                },
                {
                 "Kode_Barang": "A007",
                 "Nama_Barang": "Sampo Clear",
                 "Satuan": "Pcs",
                 "Jumlah": 2
                }
               ],
            },

            {
              query: "SELECT Kode_Barang, Jumlah, Subharga FROM Transaksi;",
              result: [
                {
                 "Kode_Barang": "A001",
                 "Jumlah": 10,
                 "Subharga": 50000
                },
                {
                 "Kode_Barang": "A003",
                 "Jumlah": 5,
                 "Subharga": 15000
                },
                {
                 "Kode_Barang": "A006",
                 "Jumlah": 4,
                 "Subharga": 32000
                },
                {
                 "Kode_Barang": "A007",
                 "Jumlah": 2,
                 "Subharga": 24000
                }
               ],  
            },

            {
              query: "DELETE FROM Barang WHERE Kode_Barang='A001';",
              result: [
                {
                 "Kode_Barang": "A002",
                 "Nama_Barang": "Sabun Dove",
                 "Satuan": "Pcs",
                 "Harga": 5000
                },
                {
                 "Kode_Barang": "A003",
                 "Nama_Barang": "Sabun Lifeboy",
                 "Satuan": "Pcs",
                 "Harga": 3000
                },
                {
                 "Kode_Barang": "A004",
                 "Nama_Barang": "Sabun Give",
                 "Satuan": "Pcs",
                 "Harga": 3000
                },
                {
                 "Kode_Barang": "A005",
                 "Nama_Barang": "Sabun Ekonomi",
                 "Satuan": "Pcs",
                 "Harga": 5000
                },
                {
                 "Kode_Barang": "A006",
                 "Nama_Barang": "Pepsodent",
                 "Satuan": "Pcs",
                 "Harga": 8000
                },
                {
                 "Kode_Barang": "A007",
                 "Nama_Barang": "Sampo Clear",
                 "Satuan": "Pcs",
                 "Harga": 12000
                },
                {
                 "Kode_Barang": "A008",
                 "Nama_Barang": "Sampo Pantene",
                 "Satuan": "Pcs",
                 "Harga": 12000
                },
                {
                 "Kode_Barang": "A009",
                 "Nama_Barang": "Sampo Sunsilk",
                 "Satuan": "Pcs",
                 "Harga": 12000
                }
               ],
            },

           {
              query: "DELETE FROM Barang WHERE Kode_Barang='A002';",
              result: [
                {
                 "Kode_Barang": "A001",
                 "Nama_Barang": "Rinso",
                 "Satuan": "Pcs",
                 "Harga": 5000
                },
                { 
                 "Kode_Barang": "A003",
                 "Nama_Barang": "Sabun Lifeboy",
                 "Satuan": "Pcs",
                 "Harga": 3000
                },
                {
                 "Kode_Barang": "A004",
                 "Nama_Barang": "Sabun Give",
                 "Satuan": "Pcs",
                 "Harga": 3000
                },
                {
                 "Kode_Barang": "A005",
                 "Nama_Barang": "Sabun Ekonomi",
                 "Satuan": "Pcs",
                 "Harga": 5000
                },
                {
                 "Kode_Barang": "A006",
                 "Nama_Barang": "Pepsodent",
                 "Satuan": "Pcs",
                 "Harga": 8000
                },
                {
                 "Kode_Barang": "A007",
                 "Nama_Barang": "Sampo Clear",
                 "Satuan": "Pcs",
                 "Harga": 12000
                },
                {
                 "Kode_Barang": "A008",
                 "Nama_Barang": "Sampo Pantene",
                 "Satuan": "Pcs",
                 "Harga": 12000
                },
                {
                 "Kode_Barang": "A009",
                 "Nama_Barang": "Sampo Sunsilk",
                 "Satuan": "Pcs",
                 "Harga": 12000
                }
               ],
            },

            {
              query: "DELETE FROM Barang WHERE Kode_Barang='A003';",
              result: [
                {
                 "Kode_Barang": "A001",
                 "Nama_Barang": "Rinso",
                 "Satuan": "Pcs",
                 "Harga": 5000
                },
                { 
                 "Kode_Barang": "A002",
                 "Nama_Barang": "Sabun Dove",
                 "Satuan": "Pcs",
                 "Harga": 5000
                },
                {
                 "Kode_Barang": "A004",
                 "Nama_Barang": "Sabun Give",
                 "Satuan": "Pcs",
                 "Harga": 3000
                },
                {
                 "Kode_Barang": "A005",
                 "Nama_Barang": "Sabun Ekonomi",
                 "Satuan": "Pcs",
                 "Harga": 5000
                },
                {
                 "Kode_Barang": "A006",
                 "Nama_Barang": "Pepsodent",
                 "Satuan": "Pcs",
                 "Harga": 8000
                },
                {
                 "Kode_Barang": "A007",
                 "Nama_Barang": "Sampo Clear",
                 "Satuan": "Pcs",
                 "Harga": 12000
                },
                {
                 "Kode_Barang": "A008",
                 "Nama_Barang": "Sampo Pantene",
                 "Satuan": "Pcs",
                 "Harga": 12000
                },
                {
                 "Kode_Barang": "A009",
                 "Nama_Barang": "Sampo Sunsilk",
                 "Satuan": "Pcs",
                 "Harga": 12000
                }
               ],
            },

            {
              query: "DELETE FROM Barang WHERE Kode_Barang='A004';",
              result: [
                {
                 "Kode_Barang": "A001",
                 "Nama_Barang": "Rinso",
                 "Satuan": "Pcs",
                 "Harga": 5000
                },
                { 
                 "Kode_Barang": "A002",
                 "Nama_Barang": "Sabun Dove",
                 "Satuan": "Pcs",
                 "Harga": 5000
                },
                {
                 "Kode_Barang": "A003",
                 "Nama_Barang": "Sabun Lifeboy",
                 "Satuan": "Pcs",
                 "Harga": 3000
                },
                {
                 "Kode_Barang": "A005",
                 "Nama_Barang": "Sabun Ekonomi",
                 "Satuan": "Pcs",
                 "Harga": 5000
                },
                {
                 "Kode_Barang": "A006",
                 "Nama_Barang": "Pepsodent",
                 "Satuan": "Pcs",
                 "Harga": 8000
                },
                {
                 "Kode_Barang": "A007",
                 "Nama_Barang": "Sampo Clear",
                 "Satuan": "Pcs",
                 "Harga": 12000
                },
                {
                 "Kode_Barang": "A008",
                 "Nama_Barang": "Sampo Pantene",
                 "Satuan": "Pcs",
                 "Harga": 12000
                },
                {
                 "Kode_Barang": "A009",
                 "Nama_Barang": "Sampo Sunsilk",
                 "Satuan": "Pcs",
                 "Harga": 12000
                }
               ],
            },

            {
              query: "DELETE FROM Barang WHERE Kode_Barang='A005';",
              result: [
                {
                 "Kode_Barang": "A001",
                 "Nama_Barang": "Rinso",
                 "Satuan": "Pcs",
                 "Harga": 5000
                },
                { 
                 "Kode_Barang": "A002",
                 "Nama_Barang": "Sabun Dove",
                 "Satuan": "Pcs",
                 "Harga": 5000
                },
                {
                 "Kode_Barang": "A003",
                 "Nama_Barang": "Sabun Lifeboy",
                 "Satuan": "Pcs",
                 "Harga": 3000
                },
                {
                 "Kode_Barang": "A004",
                 "Nama_Barang": "Sabun Give",
                 "Satuan": "Pcs",
                 "Harga": 3000
                },
                {
                 "Kode_Barang": "A006",
                 "Nama_Barang": "Pepsodent",
                 "Satuan": "Pcs",
                 "Harga": 8000
                },
                {
                 "Kode_Barang": "A007",
                 "Nama_Barang": "Sampo Clear",
                 "Satuan": "Pcs",
                 "Harga": 12000
                },
                {
                 "Kode_Barang": "A008",
                 "Nama_Barang": "Sampo Pantene",
                 "Satuan": "Pcs",
                 "Harga": 12000
                },
                {
                 "Kode_Barang": "A009",
                 "Nama_Barang": "Sampo Sunsilk",
                 "Satuan": "Pcs",
                 "Harga": 12000
                }
               ],
            },

            {
              query: "DELETE FROM Barang WHERE Kode_Barang='A006';",
              result: [
                {
                 "Kode_Barang": "A001",
                 "Nama_Barang": "Rinso",
                 "Satuan": "Pcs",
                 "Harga": 5000
                },
                { 
                 "Kode_Barang": "A002",
                 "Nama_Barang": "Sabun Dove",
                 "Satuan": "Pcs",
                 "Harga": 5000
                },
                {
                 "Kode_Barang": "A003",
                 "Nama_Barang": "Sabun Lifeboy",
                 "Satuan": "Pcs",
                 "Harga": 3000
                },
                {
                 "Kode_Barang": "A004",
                 "Nama_Barang": "Sabun Give",
                 "Satuan": "Pcs",
                 "Harga": 3000
                },
                {
                 "Kode_Barang": "A005",
                 "Nama_Barang": "Sabun Ekonomi",
                 "Satuan": "Pcs",
                 "Harga": 5000
                },
                {
                 "Kode_Barang": "A007",
                 "Nama_Barang": "Sampo Clear",
                 "Satuan": "Pcs",
                 "Harga": 12000
                },
                {
                 "Kode_Barang": "A008",
                 "Nama_Barang": "Sampo Pantene",
                 "Satuan": "Pcs",
                 "Harga": 12000
                },
                {
                 "Kode_Barang": "A009",
                 "Nama_Barang": "Sampo Sunsilk",
                 "Satuan": "Pcs",
                 "Harga": 12000
                }
               ],
            },

            {
              query: "DELETE FROM Barang WHERE Kode_Barang='A007';",
              result: [
                {
                 "Kode_Barang": "A001",
                 "Nama_Barang": "Rinso",
                 "Satuan": "Pcs",
                 "Harga": 5000
                },
                { 
                 "Kode_Barang": "A002",
                 "Nama_Barang": "Sabun Dove",
                 "Satuan": "Pcs",
                 "Harga": 5000
                },
                {
                 "Kode_Barang": "A003",
                 "Nama_Barang": "Sabun Lifeboy",
                 "Satuan": "Pcs",
                 "Harga": 3000
                },
                {
                 "Kode_Barang": "A004",
                 "Nama_Barang": "Sabun Give",
                 "Satuan": "Pcs",
                 "Harga": 3000
                },
                {
                 "Kode_Barang": "A005",
                 "Nama_Barang": "Sabun Ekonomi",
                 "Satuan": "Pcs",
                 "Harga": 5000
                },
                {
                 "Kode_Barang": "A006",
                 "Nama_Barang": "Pepsodent",
                 "Satuan": "Pcs",
                 "Harga": 8000
                },
                {
                 "Kode_Barang": "A008",
                 "Nama_Barang": "Sampo Pantene",
                 "Satuan": "Pcs",
                 "Harga": 12000
                },
                {
                 "Kode_Barang": "A009",
                 "Nama_Barang": "Sampo Sunsilk",
                 "Satuan": "Pcs",
                 "Harga": 12000
                }
               ],
            },

            {
              query: "DELETE FROM Barang WHERE Kode_Barang='A008';",
              result: [
                {
                 "Kode_Barang": "A001",
                 "Nama_Barang": "Rinso",
                 "Satuan": "Pcs",
                 "Harga": 5000
                },
                { 
                 "Kode_Barang": "A002",
                 "Nama_Barang": "Sabun Dove",
                 "Satuan": "Pcs",
                 "Harga": 5000
                },
                {
                 "Kode_Barang": "A003",
                 "Nama_Barang": "Sabun Lifeboy",
                 "Satuan": "Pcs",
                 "Harga": 3000
                },
                {
                 "Kode_Barang": "A004",
                 "Nama_Barang": "Sabun Give",
                 "Satuan": "Pcs",
                 "Harga": 3000
                },
                {
                 "Kode_Barang": "A005",
                 "Nama_Barang": "Sabun Ekonomi",
                 "Satuan": "Pcs",
                 "Harga": 5000
                },
                {
                 "Kode_Barang": "A006",
                 "Nama_Barang": "Pepsodent",
                 "Satuan": "Pcs",
                 "Harga": 8000
                },
                {
                 "Kode_Barang": "A007",
                 "Nama_Barang": "Sampo Clear",
                 "Satuan": "Pcs",
                 "Harga": 12000
                },
                {
                 "Kode_Barang": "A009",
                 "Nama_Barang": "Sampo Sunsilk",
                 "Satuan": "Pcs",
                 "Harga": 12000
                }
               ],
            },

            {
              query: "DELETE FROM Barang WHERE Kode_Barang='A009';",
              result: [
                {
                 "Kode_Barang": "A001",
                 "Nama_Barang": "Rinso",
                 "Satuan": "Pcs",
                 "Harga": 5000
                },
                { 
                 "Kode_Barang": "A002",
                 "Nama_Barang": "Sabun Dove",
                 "Satuan": "Pcs",
                 "Harga": 5000
                },
                {
                 "Kode_Barang": "A003",
                 "Nama_Barang": "Sabun Lifeboy",
                 "Satuan": "Pcs",
                 "Harga": 3000
                },
                {
                 "Kode_Barang": "A004",
                 "Nama_Barang": "Sabun Give",
                 "Satuan": "Pcs",
                 "Harga": 3000
                },
                {
                 "Kode_Barang": "A005",
                 "Nama_Barang": "Sabun Ekonomi",
                 "Satuan": "Pcs",
                 "Harga": 5000
                },
                {
                 "Kode_Barang": "A006",
                 "Nama_Barang": "Pepsodent",
                 "Satuan": "Pcs",
                 "Harga": 8000
                },
                {
                 "Kode_Barang": "A007",
                 "Nama_Barang": "Sampo Clear",
                 "Satuan": "Pcs",
                 "Harga": 12000
                },
                {
                 "Kode_Barang": "A008",
                 "Nama_Barang": "Sampo Pantene",
                 "Satuan": "Pcs",
                 "Harga": 12000
                }
               ],
            },
          ];

export const queries = [
  "SELECT * FROM Barang;",
  "SELECT * FROM Barang WHERE Harga=12000;",
  "SELECT Satuan, Harga FROM Barang;",
  "SELECT * FROM Transaksi;",
  "SELECT * FROM Barang INNER JOIN Transaksi;",
  "DELETE FROM Barang WHERE Kode_Barang='A001';",
];
