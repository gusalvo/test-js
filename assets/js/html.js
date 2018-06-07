
 <html>
  <head>
    <meta charset="utf-8" />
    <meta name="description" content="The Mosaicoon platform uses data to make video content marketing simple and cost-ef.fective" />
  </head>
  <body>
    <h1>Site title</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque felis sit amet efficitur congue. Phasellus ut scelerisque sem. Ut ut aliquam nisl.</p>
    <ul>
      <li>option 1</li>
      <li>option 2</li>
      <li>
        <img src="img.jpg" width="100" height="100" alt="alternative text" />
      </li>
    </ul>
  </body>
</html>



{
    document: [
        {
            tagName: 'html',
            children: [
                {
                    tagName: 'head',
                    children: 
                    [
                        {
                            tagName: 'meta',
                            attributes: [
                                {
                                    name:'charset', value:'utf-8'
                                }
                            ]
                        },

                        {
                            tagName: 'meta',
                            attributes: [
                                {
                                    name:'name', value:'description'
                                },
                                {
                                    name:'content', value:'The Mosaicoon platform uses data to make video content marketing simple and cost-ef.fective'
                                }
                            ]
                        },
                    ]
                    
                },
                {
                    tagName: 'body',
                    children: 
                    [
                        {
                            tagName: 'h1',
                            content: 'Title'
                        },

                        {
                            tagName: 'p',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque felis sit amet efficitur congue. Phasellus ut scelerisque sem. Ut ut aliquam nisl.'
                        },
                    ]
                }
            ]
        }
    ]
}

