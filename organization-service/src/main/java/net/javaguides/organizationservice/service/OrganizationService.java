package net.javaguides.organizationservice.service;

import net.javaguides.organizationservice.dto.OrganizationDto;

public interface OrganizationService {

    OrganizationDto getOrganizationByCode(String organizationCode);

    OrganizationDto saveOrganization(OrganizationDto organizationDto);
}
