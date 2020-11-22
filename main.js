const uin = '720707401454';

const getContacts = async () => {
  const resp = await fetch('hя же ', {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({
      uin
    })
  });
  const checkOnArray = (elem) => {
    const out = Array.isArray(elem) ? elem.map((el) => (out += el)) : elem;
    return out;
  };
  const json = await resp.json();
  // console.log(json);
  let data = json.data[0];
  const localDB = ' <span id="foundsource" style="color:gray; font-size:12px;">Локальная база данных</span><br>\n';
  if (json.error) {
    web.innerHTML = 'Произошла ошибка';
    email.innerHTML = 'Произошла ошибка';
    tel.innerHTML = 'Произошла ошибка';
  } else if (data.length > 0) {
    data.contact_type === 'phone' ? (tel.innerHTML = data.value) : null;
    web.innerHTML = data.source || 'Нет данных';
    tel.innerHTML = '';
    email.innerHTML = '';
    web.innerHTML = '';
    data.map((el) => {
      el.contact_type === 'phone'
        ? (tel.innerHTML = checkOnArray(el.value) + localDB)
        : el.contact_type === 'email'
        ? (email.innerHTML = checkOnArray(el.value) + localDB)
        : (web.innerHTML = checkOnArray(el.value) + localDB);
    });
  } else if (!data.length) {
    web.innerHTML = 'Нет данных';
    email.innerHTML = 'Нет данных';
    tel.innerHTML = 'Нет данных';
  }
};

getContacts();
