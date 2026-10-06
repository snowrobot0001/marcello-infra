export const services = [
  { number: '01', title: 'Infraestrutura', text: 'Administração e sustentação de servidores Linux e Windows, virtualização, troubleshooting, disponibilidade, desempenho, patching e rotinas operacionais.', tags: ['Linux', 'Windows Server', 'VMware'] },
  { number: '02', title: 'Redes & conectividade', text: 'TCP/IP, switching, VLANs, conectividade, VPN, firewall e investigação de falhas entre ambientes.', tags: ['TCP/IP', 'VLAN', 'VPN'] },
  { number: '03', title: 'Monitoramento', text: 'Zabbix, Grafana, métricas, alertas, análise de eventos e apoio à identificação de causas de incidentes.', tags: ['Zabbix', 'Grafana', 'Alertas'] },
  { number: '04', title: 'Segurança de infraestrutura', text: 'Hardening, controles de acesso, firewall, VPN, análise de logs, patching e resposta inicial a incidentes.', tags: ['Hardening', 'Acessos', 'Logs'] },
  { number: '05', title: 'Automação & IaC', text: 'Ansible, Terraform, PowerShell, Python, Bash e Git aplicados à padronização e automação de tarefas.', tags: ['Ansible', 'Terraform', 'Scripts'] },
  { number: '06', title: 'Cloud', text: 'AWS e OCI em atividades de infraestrutura, redes, segurança, backup, provisionamento e ambientes híbridos.', tags: ['AWS', 'OCI', 'Híbrido'] },
];

export const technologies = [
  { name: 'Infraestrutura', items: ['Linux', 'Windows Server', 'VMware', 'Virtualização'] },
  { name: 'Redes', items: ['TCP/IP', 'VLAN', 'VPN', 'Firewall', 'Switching'] },
  { name: 'Monitoramento', items: ['Zabbix', 'Grafana'] },
  { name: 'Automação', items: ['Ansible', 'Terraform', 'Python', 'PowerShell', 'Bash', 'Git'] },
  { name: 'Cloud & containers', items: ['AWS', 'OCI', 'Docker'] },
  { name: 'Segurança', items: ['Hardening', 'Controle de acesso', 'Logs', 'Patching'] },
];

export const engagementModels = [
  ['Sob demanda', 'Atividades técnicas específicas, troubleshooting e apoio pontual.'],
  ['Projetos', 'Escopos definidos para implantação, migração, padronização ou melhoria.'],
  ['Sustentação recorrente', 'Acompanhamento técnico contínuo conforme escopo e SLA acordados.'],
  ['UST / pacote técnico', 'Modelo baseado em catálogo de serviços, créditos ou unidades técnicas.'],
];
