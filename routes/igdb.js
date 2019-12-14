
    axios({
        url: "https://api-v3.igdb.com/games",
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'user-key': '8836c4a90e59a855cb89744d5ae56534'
        },
        data: "fields name,genres,cover_big,popularity:sort popularity desc"
      })
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.error(err);
        });

        axios({
            url: "https://api-v3.igdb.com/covers",
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'user-key': '836c4a90e59a855cb89744d5ae56534'
            },
            data: "fields alpha_channel,animated,game,height,image_id,url,width;"
          })
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.error(err);
            });
            