const { iterativeCmlRunnerTpl } = require('./terraform');

describe('Terraform tests', () => {
  test('default options', async () => {
    const output = iterativeCmlRunnerTpl({});
    expect(output).toMatchInlineSnapshot(`
      "terraform {
        required_providers {
          iterative = { source = \\"iterative/iterative\\" }
        }
      }
      provider \\"iterative\\" {}

      resource \\"iterative_cml_runner\\" \\"runner\\" {
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
      }
      "
    `);
  });

  test('basic settings', async () => {
    const output = iterativeCmlRunnerTpl({
      repo: 'https://',
      token: 'abc',
      driver: 'gitlab',
      labels: 'mylabel',
      idleTimeout: 300,
      name: 'myrunner',
      single: true,
      cloud: 'aws',
      region: 'west',
      type: 'mymachinetype',
      gpu: 'mygputype',
      hddSize: 50,
      sshPrivate: 'myprivate',
      spot: true,
      spotPrice: '0.0001',
      awsSecurityGroup: 'mysg'
    });
    expect(output).toMatchInlineSnapshot(`
      "terraform {
        required_providers {
          iterative = { source = \\"iterative/iterative\\" }
        }
      }
      provider \\"iterative\\" {}

      resource \\"iterative_cml_runner\\" \\"runner\\" {
        repo = \\"https://\\"
        token = \\"abc\\"
        driver = \\"gitlab\\"
        labels = \\"mylabel\\"
        
        idle_timeout = 300
        name = \\"myrunner\\"
        single = \\"true\\"
        cloud = \\"aws\\"
        region = \\"west\\"
        instance_type = \\"mymachinetype\\"
        instance_gpu = \\"mygputype\\"
        instance_hdd_size = 50
        
        ssh_private = \\"myprivate\\"
        spot = true
        spot_price = 0.0001
        
        aws_security_group = \\"mysg\\"
        
        
        
      }
      "
    `);
  });

  test('basic settings with runner forever', async () => {
    const output = iterativeCmlRunnerTpl({
      repo: 'https://',
      token: 'abc',
      driver: 'gitlab',
      labels: 'mylabel',
      idleTimeout: 0,
      name: 'myrunner',
      single: true,
      cloud: 'aws',
      region: 'west',
      type: 'mymachinetype',
      gpu: 'mygputype',
      hddSize: 50,
      sshPrivate: 'myprivate',
      spot: true,
      spotPrice: '0.0001'
    });
    expect(output).toMatchInlineSnapshot(`
      "terraform {
        required_providers {
          iterative = { source = \\"iterative/iterative\\" }
        }
      }
      provider \\"iterative\\" {}

      resource \\"iterative_cml_runner\\" \\"runner\\" {
        repo = \\"https://\\"
        token = \\"abc\\"
        driver = \\"gitlab\\"
        labels = \\"mylabel\\"
        
        idle_timeout = 0
        name = \\"myrunner\\"
        single = \\"true\\"
        cloud = \\"aws\\"
        region = \\"west\\"
        instance_type = \\"mymachinetype\\"
        instance_gpu = \\"mygputype\\"
        instance_hdd_size = 50
        
        ssh_private = \\"myprivate\\"
        spot = true
        spot_price = 0.0001
        
        
        
        
        
      }
      "
    `);
  });

  test('basic settings with metadata', async () => {
    const output = iterativeCmlRunnerTpl({
      repo: 'https://',
      token: 'abc',
      driver: 'gitlab',
      labels: 'mylabel',
      idleTimeout: 300,
      name: 'myrunner',
      single: true,
      cloud: 'aws',
      region: 'west',
      type: 'mymachinetype',
      gpu: 'mygputype',
      hddSize: 50,
      sshPrivate: 'myprivate',
      spot: true,
      spotPrice: '0.0001',
      metadata: { one: 'value', two: null }
    });
    expect(output).toMatchInlineSnapshot(`
      "terraform {
        required_providers {
          iterative = { source = \\"iterative/iterative\\" }
        }
      }
      provider \\"iterative\\" {}

      resource \\"iterative_cml_runner\\" \\"runner\\" {
        repo = \\"https://\\"
        token = \\"abc\\"
        driver = \\"gitlab\\"
        labels = \\"mylabel\\"
        
        idle_timeout = 300
        name = \\"myrunner\\"
        single = \\"true\\"
        cloud = \\"aws\\"
        region = \\"west\\"
        instance_type = \\"mymachinetype\\"
        instance_gpu = \\"mygputype\\"
        instance_hdd_size = 50
        
        ssh_private = \\"myprivate\\"
        spot = true
        spot_price = 0.0001
        
        
        
        metadata = {
          one = \\"value\\"
          two = \\"\\"
        }
        
      }
      "
    `);
  });

  test('basic settings with docker volumes', async () => {
    const output = iterativeCmlRunnerTpl({
      repo: 'https://',
      token: 'abc',
      driver: 'gitlab',
      labels: 'mylabel',
      idleTimeout: 300,
      name: 'myrunner',
      single: true,
      cloud: 'aws',
      region: 'west',
      type: 'mymachinetype',
      gpu: 'mygputype',
      hddSize: 50,
      sshPrivate: 'myprivate',
      spot: true,
      spotPrice: '0.0001',
      dockerVolumes: ['/aa:/aa', '/bb:/bb']
    });
    expect(output).toMatchInlineSnapshot(`
      "terraform {
        required_providers {
          iterative = { source = \\"iterative/iterative\\" }
        }
      }
      provider \\"iterative\\" {}

      resource \\"iterative_cml_runner\\" \\"runner\\" {
        repo = \\"https://\\"
        token = \\"abc\\"
        driver = \\"gitlab\\"
        labels = \\"mylabel\\"
        
        idle_timeout = 300
        name = \\"myrunner\\"
        single = \\"true\\"
        cloud = \\"aws\\"
        region = \\"west\\"
        instance_type = \\"mymachinetype\\"
        instance_gpu = \\"mygputype\\"
        instance_hdd_size = 50
        
        ssh_private = \\"myprivate\\"
        spot = true
        spot_price = 0.0001
        
        
        
        
        docker_volumes = [\\"/aa:/aa\\",\\"/bb:/bb\\"]
      }
      "
    `);
  });

  test('basic settings with permission set', async () => {
    const output = iterativeCmlRunnerTpl({
      repo: 'https://',
      token: 'abc',
      driver: 'gitlab',
      labels: 'mylabel',
      idleTimeout: 300,
      name: 'myrunner',
      single: true,
      cloud: 'aws',
      region: 'west',
      type: 'mymachinetype',
      permissionSet: 'arn:aws:iam::1:instance-profile/x',
      gpu: 'mygputype',
      hddSize: 50,
      sshPrivate: 'myprivate',
      spot: true,
      spotPrice: '0.0001',
      awsSecurityGroup: 'mysg'
    });
    expect(output).toMatchInlineSnapshot(`
      "terraform {
        required_providers {
          iterative = { source = \\"iterative/iterative\\" }
        }
      }
      provider \\"iterative\\" {}

      resource \\"iterative_cml_runner\\" \\"runner\\" {
        repo = \\"https://\\"
        token = \\"abc\\"
        driver = \\"gitlab\\"
        labels = \\"mylabel\\"
        
        idle_timeout = 300
        name = \\"myrunner\\"
        single = \\"true\\"
        cloud = \\"aws\\"
        region = \\"west\\"
        instance_type = \\"mymachinetype\\"
        instance_gpu = \\"mygputype\\"
        instance_hdd_size = 50
        instance_permission_set = \\"arn:aws:iam::1:instance-profile/x\\"
        ssh_private = \\"myprivate\\"
        spot = true
        spot_price = 0.0001
        
        aws_security_group = \\"mysg\\"
        
        
        
      }
      "
    `);
  });

  test('Startup script', async () => {
    const output = iterativeCmlRunnerTpl({
      repo: 'https://',
      token: 'abc',
      driver: 'gitlab',
      labels: 'mylabel',
      idleTimeout: 300,
      name: 'myrunner',
      single: true,
      cloud: 'aws',
      region: 'west',
      type: 'mymachinetype',
      gpu: 'mygputype',
      hddSize: 50,
      sshPrivate: 'myprivate',
      spot: true,
      spotPrice: '0.0001',
      startupScript: 'c3VkbyBlY2hvICdoZWxsbyB3b3JsZCcgPj4gL3Vzci9oZWxsby50eHQ='
    });
    expect(output).toMatchInlineSnapshot(`
      "terraform {
        required_providers {
          iterative = { source = \\"iterative/iterative\\" }
        }
      }
      provider \\"iterative\\" {}

      resource \\"iterative_cml_runner\\" \\"runner\\" {
        repo = \\"https://\\"
        token = \\"abc\\"
        driver = \\"gitlab\\"
        labels = \\"mylabel\\"
        
        idle_timeout = 300
        name = \\"myrunner\\"
        single = \\"true\\"
        cloud = \\"aws\\"
        region = \\"west\\"
        instance_type = \\"mymachinetype\\"
        instance_gpu = \\"mygputype\\"
        instance_hdd_size = 50
        
        ssh_private = \\"myprivate\\"
        spot = true
        spot_price = 0.0001
        startup_script = \\"c3VkbyBlY2hvICdoZWxsbyB3b3JsZCcgPj4gL3Vzci9oZWxsby50eHQ=\\"
        
        
        
        
      }
      "
    `);
  });
});
