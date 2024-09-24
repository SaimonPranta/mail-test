Mail server is listening on PORT: 25 with SSL/TLS
From onConnect method, session ID:  s43dxyk6r3jxsbre
From onMailFrom method, mail address: saimonpranta@gmail.com
From onRcptTo method, mail address: sfsdf@micple.com
Parsed email: {
  attachments: [],
  headers: Map(13) {
    'received' => 'by mail-yb1-f169.google.com with SMTP id 3f1490d57ef6-e1651f48c31so4526117276.0 for <sfsdf@micple.com>; Tue, 24 Sep 2024 00:02:14 -0700 (PDT)',
    'dkim-signature' => { value: 'v=1', params: [Object] },
    'x-google-dkim-signature' => 'v=1; a=rsa-sha256; c=relaxed/relaxed; d=1e100.net; s=20230601; t=1727161332; x=1727766132; h=to:subject:message-id:date:from:mime-version:x-gm-message-state :from:to:cc:subject:date:message-id:reply-to; bh=ju1sLG7JpBcqlBK5v5XKav4407EGT+fKo5usaFl+aqA=; b=lXGodyKBlBofOyBppRKSql8Gp11d91TLfJar8aCL1yziKG/pK77zqn9rqP3f+caFwP SJwc+by/usp9q1OlY0IjZUiIZYFV8chd8PBGLvF6eqKBJnz33F/pMklzOxqhjUtSmcha Qe6r3madhZEV76pZuVQxAuMXRorrmWzg6zTvpxOG3bo51AJyyQENd0ysV5Bg5OYwA+yS RjjslHJ/ci+jzXFoY5PIc1/P48TDtRMlj6wOTrm0WbMCRm9AniTW86FI14HdlsOv5n3x X4ENfHwfoFUVLlTQ/rlZdW0jsagQiAALU3KIiuOj1j2sJqICCqEi8tNkXY7CM7AQBjmt PdIA==',
    'x-gm-message-state' => 'AOJu0Yw2sZQurb6UCdYdyu4E6I2V9jM++O5nHsVmYFjDVdxYt27L3KOM 77oqcKmcRNtZfes/CcBFAD6KoihEd9lOECZWJFfv/9tm2DtHdIL/vJIoq/XGc2hew9uUs8JTKQC dDWemV0nHEN5uQYApVlI78QQFeb0lGA==',
    'x-google-smtp-source' => 'AGHT+IECGl/TMvpSnDtFtggtgutwY3Yt+EbfNDQsdVcshGZMSaeBVTSZWbgDcU695hT1YhTBxMjS6pzXO15FXPg1qqM=',
    'x-received' => 'by 2002:a05:690c:480b:b0:6dd:fc21:c197 with SMTP id 00721157ae682-6dfeed2dd91mr121315477b3.13.1727161331807; Tue, 24 Sep 2024 00:02:11 -0700 (PDT)',
    'mime-version' => '1.0',
    'from' => {
      value: [Array],
      html: '<span class="mp_address_group"><span class="mp_address_name">Saimon Pranta</span> &lt;<a href="mailto:saimonpranta@gmail.com" class="mp_address_email">saimonpranta@gmail.com</a>&gt;</span>',
      text: '"Saimon Pranta" <saimonpranta@gmail.com>'
    },
    'date' => 2024-09-24T07:02:02.000Z,
    'message-id' => '<CACG2X+1i=cW4nsj8GuyQGVP5dBR4BCyNs8-NqRHH_wWjt+iLKg@mail.gmail.com>',
    'subject' => 'asdf',
    'to' => {
      value: [Array],
      html: '<span class="mp_address_group"><a href="mailto:sfsdf@micple.com" class="mp_address_email">sfsdf@micple.com</a></span>',
      text: 'sfsdf@micple.com'
    },
    'content-type' => { value: 'multipart/alternative', params: [Object] }
  },
  headerLines: [
    {
      key: 'received',
      line: 'Received: by mail-yb1-f169.google.com with SMTP id 3f1490d57ef6-e1651f48c31so4526117276.0\r\n' +
        '        for <sfsdf@micple.com>; Tue, 24 Sep 2024 00:02:14 -0700 (PDT)'
    },
    {
      key: 'dkim-signature',
      line: 'DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;\r\n' +
        '        d=gmail.com; s=20230601; t=1727161332; x=1727766132; darn=micple.com;\r\n' +
        '        h=to:subject:message-id:date:from:mime-version:from:to:cc:subject\r\n' +
        '         :date:message-id:reply-to;\r\n' +
        '        bh=ju1sLG7JpBcqlBK5v5XKav4407EGT+fKo5usaFl+aqA=;\r\n' +
        '        b=N8W7R+t/KsImg1PsZ/1SBbz+dgIFiEnPq2OWce5kaOhwlu+YFtgm5pb5MmT286i7OE\r\n' +
        '         Hdx/zgTFpiA9u1LHwDQvOata9fF7ruF6KIBmVT+aRf2aSSKTyOLiOhCQn5wRgvqY1BFO\r\n' +
        '         lwA1nXPHdZmx6TMKy/HK0vclleJgM9GHJ5KOvLrbU9bDhZpQ677uVz3AMkqQBFsemKIA\r\n' +
        '         ADS/20wffNFlwOoqdftMXc4Gr6uIAjUU6iPHXkViCE1Eix/N15EnjPNx7duw2aDUTpsK\r\n' +
        '         BdG8xqDd0Ss4YdLfYnj744fZdM9ldLhhMUE8HM6nCF+aC3JwFcqGFObi7BUZ7yoHaPSn\r\n' +
        '         7UbA=='
    },
    {
      key: 'x-google-dkim-signature',
      line: 'X-Google-DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;\r\n' +
        '        d=1e100.net; s=20230601; t=1727161332; x=1727766132;\r\n' +
        '        h=to:subject:message-id:date:from:mime-version:x-gm-message-state\r\n' +
        '         :from:to:cc:subject:date:message-id:reply-to;\r\n' +
        '        bh=ju1sLG7JpBcqlBK5v5XKav4407EGT+fKo5usaFl+aqA=;\r\n' +
        '        b=lXGodyKBlBofOyBppRKSql8Gp11d91TLfJar8aCL1yziKG/pK77zqn9rqP3f+caFwP\r\n' +
        '         SJwc+by/usp9q1OlY0IjZUiIZYFV8chd8PBGLvF6eqKBJnz33F/pMklzOxqhjUtSmcha\r\n' +
        '         Qe6r3madhZEV76pZuVQxAuMXRorrmWzg6zTvpxOG3bo51AJyyQENd0ysV5Bg5OYwA+yS\r\n' +
        '         RjjslHJ/ci+jzXFoY5PIc1/P48TDtRMlj6wOTrm0WbMCRm9AniTW86FI14HdlsOv5n3x\r\n' +
        '         X4ENfHwfoFUVLlTQ/rlZdW0jsagQiAALU3KIiuOj1j2sJqICCqEi8tNkXY7CM7AQBjmt\r\n' +
        '         PdIA=='
    },
    {
      key: 'x-gm-message-state',
      line: 'X-Gm-Message-State: AOJu0Yw2sZQurb6UCdYdyu4E6I2V9jM++O5nHsVmYFjDVdxYt27L3KOM\r\n' +
        '\t77oqcKmcRNtZfes/CcBFAD6KoihEd9lOECZWJFfv/9tm2DtHdIL/vJIoq/XGc2hew9uUs8JTKQC\r\n' +
        '\tdDWemV0nHEN5uQYApVlI78QQFeb0lGA=='
    },
    {
      key: 'x-google-smtp-source',
      line: 'X-Google-Smtp-Source: AGHT+IECGl/TMvpSnDtFtggtgutwY3Yt+EbfNDQsdVcshGZMSaeBVTSZWbgDcU695hT1YhTBxMjS6pzXO15FXPg1qqM='
    },
    {
      key: 'x-received',
      line: 'X-Received: by 2002:a05:690c:480b:b0:6dd:fc21:c197 with SMTP id\r\n' +
        ' 00721157ae682-6dfeed2dd91mr121315477b3.13.1727161331807; Tue, 24 Sep 2024\r\n' +
        ' 00:02:11 -0700 (PDT)'
    },
    { key: 'mime-version', line: 'MIME-Version: 1.0' },
    {
      key: 'from',
      line: 'From: Saimon Pranta <saimonpranta@gmail.com>'
    },
    { key: 'date', line: 'Date: Tue, 24 Sep 2024 13:02:02 +0600' },
    {
      key: 'message-id',
      line: 'Message-ID: <CACG2X+1i=cW4nsj8GuyQGVP5dBR4BCyNs8-NqRHH_wWjt+iLKg@mail.gmail.com>'
    },
    { key: 'subject', line: 'Subject: asdf' },
    { key: 'to', line: 'To: sfsdf@micple.com' },
    {
      key: 'content-type',
      line: 'Content-Type: multipart/alternative; boundary="000000000000a7003e0622d81544"'
    }
  ],
  html: '<div dir="ltr">sadf</div>\n',
  text: 'sadf\n',
  textAsHtml: '<p>sadf</p>',
  subject: 'asdf',
  date: 2024-09-24T07:02:02.000Z,
  to: {
    value: [ [Object] ],
    html: '<span class="mp_address_group"><a href="mailto:sfsdf@micple.com" class="mp_address_email">sfsdf@micple.com</a></span>',
    text: 'sfsdf@micple.com'
  },
  from: {
    value: [ [Object] ],
    html: '<span class="mp_address_group"><span class="mp_address_name">Saimon Pranta</span> &lt;<a href="mailto:saimonpranta@gmail.com" class="mp_address_email">saimonpranta@gmail.com</a>&gt;</span>',
    text: '"Saimon Pranta" <saimonpranta@gmail.com>'
  },
  messageId: '<CACG2X+1i=cW4nsj8GuyQGVP5dBR4BCyNs8-NqRHH_wWjt+iLKg@mail.gmail.com>'
}