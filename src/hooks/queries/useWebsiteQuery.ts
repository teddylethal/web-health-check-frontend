import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import websiteApi, { websiteChecktimeApi, websiteContactApi } from '../../apis/website.api'
import { useNavigate } from 'react-router-dom'
import mainPath from '../../constants/path'

const useListWebsites = (queryConfig: {}) => {
  return useQuery({
    queryKey: ['websites', queryConfig],
    queryFn: () => websiteApi.listWebsite(queryConfig)
  })
}

const useGetWebsiteDetai = (id: string) => {
  return useQuery({
    queryKey: ['websites', id],
    queryFn: () => websiteApi.getWebsite(id)
  })
}

const useListContactsForWebsite = (id: string) => {
  return useQuery({
    queryKey: ['websites', id, 'contacts'],
    queryFn: () => websiteContactApi.listContactForWebsite(id)
  })
}
const useListChecktimesForWebsite = (id: string) => {
  return useQuery({
    queryKey: ['websites', id, 'check-times'],
    queryFn: () => websiteChecktimeApi.listChecktimeForWebsite(id)
  })
}

const useAddWebsite = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: websiteApi.addWebsite,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['websites'] })
    }
  })
}

const useUpdateWebsite = (id: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: websiteApi.updateWebsite,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['websites', id] })
    }
  })
}

const useDeleteWebsite = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  return useMutation({
    mutationFn: websiteApi.deleteWebsite,
    onSuccess: (_, websiteId) => {
      // Optionally, remove queries related to the deleted website to avoid unnecessary API calls
      queryClient.removeQueries({ queryKey: ['websites', websiteId] })
      queryClient.removeQueries({ queryKey: ['websites', websiteId, 'contacts'] })
      queryClient.removeQueries({ queryKey: ['websites', websiteId, 'check-times'] })
      // First, navigate away from the current page
      navigate(mainPath.website)
      // Then, invalidate the queries to refetch the list of websites
      queryClient.invalidateQueries({ queryKey: ['websites'] })
    }
  })
}

//! Website contact queries
const useAddContactForWebsite = (id: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: websiteContactApi.addContactForWebsite,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['websites', id, 'contacts'] })
    }
  })
}

const useDeleteContactForWebsite = (id: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: websiteContactApi.removeContactForWebsite,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['websites', id, 'contacts'] })
    }
  })
}

//! Website check-time queries
const useAddChecktimeForWebsite = (id: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: websiteChecktimeApi.addChecktimeForWebsite,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['websites', id, 'check-times'] })
    }
  })
}

const useDeleteChecktimeForWebsite = (id: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: websiteChecktimeApi.removeChecktimeForWebsite,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['websites', id, 'check-times'] })
    }
  })
}

export const websiteQuery = {
  useListWebsites,
  useGetWebsiteDetai,
  useListContactsForWebsite,
  useListChecktimesForWebsite,
  mutation: {
    useAddWebsite,
    useUpdateWebsite,
    useDeleteWebsite,
    useAddContactForWebsite,
    useDeleteContactForWebsite,
    useAddChecktimeForWebsite,
    useDeleteChecktimeForWebsite
  }
}
