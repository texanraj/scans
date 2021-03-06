// Source: https://azure.microsoft.com/en-us/global-infrastructure/services/

var regions = [
    'us-ashburn-1',
    'us-phoenix-1',
    'eu-frankfurt-1',
    'uk-london-1',
    'ca-toronto-1',
    'ap-mumbai-1',
    'ap-seoul-1',
    'ap-tokyo-1',
];

module.exports = {
    default: ['us-ashburn-1'],
    all: regions,
    vcn: regions,
    group: regions,
    publicIp: regions,
    securityList: regions,
    loadBalancer: regions,
    user: ['us-ashburn-1'],
    userGroupMembership: regions,
    authenticationPolicy: regions,
    exprt: regions,
    exportSummary: regions,
    compartment: regions,
    bucket: regions,
    waasPolicy: regions,
    policy: regions,
    subnet: regions,
    dbHome: regions,
    database: regions,
    instance: regions,
    instancePool: regions,
    autoscaleConfiguration: regions,
    networkSecurityGroup: regions,
    securityRule: regions,
    bootVolume: regions,
    bootVolumeBackup: regions,
    volume: regions,
    volumeBackup: regions,
    bootVolumeAttachment: regions,
    availabilityDomain: ['us-ashburn-1'],
    volumeGroup: regions,
    volumeGroupBackup: regions,
    volumeBackupPolicy: regions,
    volumeBackupPolicyAssignment: regions,
    preAuthenticatedRequest: regions,
    configuration: ['us-ashburn-1'],
    dbSystem: regions
};