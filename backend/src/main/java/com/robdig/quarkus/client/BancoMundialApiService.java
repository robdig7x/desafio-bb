package com.robdig.quarkus.client;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.Response;

import org.jboss.resteasy.annotations.jaxrs.QueryParam;
import org.eclipse.microprofile.rest.client.inject.RegisterRestClient;

@Path("country")
@RegisterRestClient
public interface BancoMundialApiService {

    @GET
    @Path("{code}/indicator/SI.POV.DDAY")
    Response getIndicatorByCountry(@PathParam("code") String code, @QueryParam("format") String format,
                                    @QueryParam("orderBy") String orderBy, @QueryParam("per_page") String per_page);
}
