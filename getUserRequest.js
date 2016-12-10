var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://sandbox-apis.bbvacompass.com/api/v2/users/f4195615-7061-4819-a7ca-ae72929c07fd/accounts",
  "method": "GET",
  "headers": {
    "accept": "application/json",
    "content-type": "application/json",
    "authorization": "tsec eJxtlEmPq1YQhf/KU2/RazAzUr+OmGwGG4yNAbOJLvNwmTEX+PXxk5Ioi+xqcU6VqnTq+/pjbeCPJR2nsmt/fRw+iY8faRt3Sdnmvz4e7vEn//FjmkGbANi16a+PLZ0+/vj+cqc0/qEnvz5ijknY6MD8jJI0+kknvPCuDsTPA58KDEkyZALeHbx/B/xJfHx/yWVfpKMCZvA9BE+h2hgV257LFji0dZzHCDh6+Vxfq6hi5Q1lo1gg/E53BzJ8bNwO29NeB5IbqS0zYoLQer6s6tVKnGvCuxxtr2SqerekijhRiZxzpODT0AaVnWEq6jrzet69DD/lxkFGYuE5QNEm3nz5t1njVXEMzrt+TSNewY5aCxrVKiIoVSc6KecJ7blKhf6OhJHpsWvYZGSV+BpljLjtcBmbNMEz73CmjkVbvsTCzvX206LmuzMen5SuaKhY8LY2mgVB3Rc9sB4K6byPrQmhXI6QjI5xPihTLfrIukKvnbbUdmjxaEfiPTCOQUDmfbQv7Dhz5SBOtNyyomZpaqIRkQo8fOs7/SyBkOMrqamYzAye1C6+XIWIXJTqyfU223Rem6F7VhSyfr2WinrY11jOsMCqmEJlqPj52FSpP06rWzoX9aa4tSixJ1hoxHGwjIhdojQXm8YQ1F5LVkoNYkhtd4Wg9qhAPn0bRBD2b0FSOxZCmsld7/MolHYcu1SmC1F03QkrxWeZOfEQOVRFGPbrwWEEtzFQD+LzsGaeTLDRELb9UjX0nQxR63IUmCfxEdwQOFPNzvSpupxgppAOQ0l9fFIHwSfh8ZRIZ2Fn+VfgM9nZyKQQPyF3ejyE2HNWykSCZaAibQVSZUOutGVvpUlDeMVFrCA7f2y4Rj8sLcgEYzEto6MOaJEhcaWLJLIGQC8dvb78DuZTXJknoSuCRVx0byYfwmElF78szLKBpMQD3A1HqfId3zcePGIOhl9hGOcrV4Kmud7g/LP7jmzlesuIxWjL99K98M9TdbBjvaygtjDbrVb4GcoUpoKKjq0k7E6BMw1NdmXJ+eQ17Nk3Jcl+VcFOv4Y2zBIgPLV7cExIrgPlulkjqdrBuEZIAwPPvYDOOIRJPPfUIuQF5bRfPtS7h8noIdd+Ucz0AkzCxstXSyhwNDsXBixRY1A545zztumjSE4LdFe/G148kLCGMBgXWL7bE+qFckAvdmFA8cbJIVWIP2Yh8fVtvnlHqcrMQzYP9eL2bCw/b3uPVUqNLhfBtlkQNtutatGdaqEcu6nXrOlTOrnvvyTfZ4p0ORLFzuv9rMdSzGx7NnstamWfu7HZGHNFyHOjuoO84yKdA5WMX9pNGHow8fGd8/F8EuRe6mdOnNhEDpdmDphZzgK4ua6V5LehMatCvQe6v/B4fuhX6ypbGn/W93QWuSzRj0ZICReJLxjHads5jWVeh1eN6p934h4PtBNz84C8m8m92NjJNS81PHjpfeJx6YOUV/GbdFS9xMNrBTjnijEgjozU/ML/A8O/wWimmwhLMH3DKYqWz378jMtsBJ9dH3fNe6PpM4YgPvxj/Vf+pbbxuPXzm7QizLuxnIvmW1HvaZLisiTjV1O+M1eQ/Ib7F/5/4i/8N9i//wIoRwsW",
    "x-unique-transaction-id": "01",
    "cache-control": "no-cache",
    "postman-token": "b8881ea5-fefb-ae7c-1b1b-afbb49db2abe"
  },
  "processData": false,
  "data": "{\n   \"account_type\":\"01\"\n}"
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
