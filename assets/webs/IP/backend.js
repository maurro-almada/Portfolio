 document.addEventListener('DOMContentLoaded', () => {
    const OPTIONS = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '924b3e491cmsh78a0ea3fb994e12p11b030jsn476d4a4e6d3f',
        'X-RapidAPI-Host': 'ip-reputation-geoip-and-detect-vpn.p.rapidapi.com'
      }
    };
  
    const fetchipinfo = ip => {
      return fetch(`https://ip-reputation-geoip-and-detect-vpn.p.rapidapi.com/?ip=${ip}`, OPTIONS)
        .then(res => res.json())
        .catch(err => console.error(err));
    };
  
    const $form = document.querySelector('#form');
    const $input = document.querySelector('#input');
    const $submit = document.querySelector('#submit');
    const $results = document.querySelector('#results');
  
    console.log($form);
    console.log($input);
    console.log($submit);
    console.log($results);
  
    $form.addEventListener('submit', async event => {
      event.preventDefault();
  
      const { value } = $input;
      if (!value) return;
  
      $submit.setAttribute('disabled', '');
      $submit.setAttribute('aria-busy', 'true');
  
      const ipinfo = await fetchipinfo(value);
  
      if (ipinfo) {
        $results.innerHTML = JSON.stringify(ipinfo, null, 2);
      }
  
      $submit.removeAttribute('disabled');
      $submit.removeAttribute('aria-busy');
    });
  });
