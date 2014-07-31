# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  # All Vagrant configuration is done here. The most common configuration
  # options are documented and commented below. For a complete reference,
  # please see the online documentation at vagrantup.com.

  # Fix the error 'stdin is not a tty' when shell provisioning Ubuntu boxes.
  # If there's a line that only consists of 'mesg n' in /root/.profile,
  # replace it with 'tty -s && mesg n'.
  config.vm.provision "shell",
    :inline => "(grep -q -E '^mesg n$' /root/.profile && sed -i 's/^mesg n$/tty -s \\&\\& mesg n/g' /root/.profile && echo 'Fix the previous error about stdin!') || exit 0;"

  # Explicitly set the VM's FQDN according to this Vagrant bug #3271.
  config.vm.hostname = "zyeeda.com"

  # Every Vagrant virtual environment requires a box to build off of.
  config.vm.box = "ubuntu/trusty64"

  # Disable automatic box update checking. If you disable this, then
  # boxes will only be checked for updates when the user runs
  # `vagrant box outdated`. This is not recommended.
  config.vm.box_check_update = false

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine. In the example below,
  # accessing "localhost:8080" will access port 80 on the guest machine.
  config.vm.network "forwarded_port", guest: 80, host: 80, auto_correct: true

  # If a port collision occurs (i.e. port 8080 on local machine is in use),
  # then tell Vagrant to use the next available port between 8081 and 8100
  config.vm.usable_port_range = 8081..8100

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  config.vm.network "private_network", ip: "192.168.33.10"

  # BEGIN Vagrant-Cachier configuration ####################################
  # check for the presence of the Vagrant-Cachier plugin before attempting
  # these configurations
  if Vagrant.has_plugin?("vagrant-cachier")
    config.cache.scope = :box

    # Use a vagrant-cachier cache if one is detected
    config.cache.auto_detect = true

    # and lets specifically use the apt cache (note, this is a Debian-ism)
    config.cache.enable :apt
  end
  # END Vagrant-Cachie configuration #######################################

  config.vm.provision "shell", :path => "shell/initialize.sh"
  config.vm.provision "shell", :path => 'shell/build-nginx.sh'
end
