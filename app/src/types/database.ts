// Placeholder for Supabase generated types
// Generate using: npx supabase gen types typescript --local > app/src/types/database.ts
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

type TableDef<Row, Insert = Partial<Row>, Update = Partial<Row>> = {
  Row: Row
  Insert: Insert
  Update: Update
  Relationships: []
}

export interface Database {
  public: {
    Tables: {
      users: TableDef<{
        id: string
        display_name: string
        email: string
        auth_provider: string
        avatar_url: string | null
        is_host: boolean
        notification_preferences: Json
        accessibility_preferences: Json
        push_token: string | null
        created_at: string
        last_active_at: string
      }, {
        id: string
        display_name: string
        email: string
        auth_provider?: string
        avatar_url?: string | null
        is_host?: boolean
        notification_preferences?: Json
        accessibility_preferences?: Json
        push_token?: string | null
        created_at?: string
        last_active_at?: string
      }>
      sessions: TableDef<{
        id: string
        game_type: string
        name: string
        date_time: string
        state: string
        status?: string | null
        host_id: string
        config: Json
        invite_code: string | null
        ended_at?: string | null
        epilogues_status?: string | null
        epilogue_delivery_date?: string | null
        created_at: string
        updated_at: string
      }, {
        id?: string
        game_type: string
        name: string
        date_time: string
        state?: string
        status?: string | null
        host_id?: string
        config?: Json
        invite_code?: string | null
        ended_at?: string | null
        epilogues_status?: string | null
        epilogue_delivery_date?: string | null
        created_at?: string
        updated_at?: string
      }>
      session_participations: TableDef<{
        id: string
        session_id: string
        user_id: string | null
        display_name: string
        email: string | null
        role: string | null
        rsvp_status: string
        character_id: string | null
        joined_at: string
        contribution_status: string | null
        created_at: string
        updated_at: string
      }, {
        id?: string
        session_id: string
        user_id?: string | null
        display_name?: string
        email?: string | null
        role?: string | null
        rsvp_status?: string
        character_id?: string | null
        joined_at?: string
        contribution_status?: string | null
        created_at?: string
        updated_at?: string
      }>
      invitation_tokens: TableDef<{
        id: string
        session_id: string
        token: string
        email: string | null
        is_shared: boolean
        invitation_token_shared?: string | null
        expires_at: string | null
        redeemed_at: string | null
        created_at: string
      }, {
        id?: string
        session_id: string
        token?: string
        email?: string | null
        is_shared?: boolean
        invitation_token_shared?: string | null
        expires_at?: string | null
        redeemed_at?: string | null
        created_at?: string
      }>
      contributions: TableDef<{
        id: string
        session_id: string
        participant_id: string
        type: string | null
        content: Json
        status: string
        created_at: string
        updated_at: string
      }, {
        id?: string
        session_id: string
        participant_id: string
        type?: string | null
        content: Json
        status?: string
        created_at?: string
        updated_at?: string
      }>
      notification_queue: TableDef<{
        id: string
        user_id: string | null
        type: string
        title: string
        body: string
        data: Json
        status: string
        created_at: string
      }, {
        id?: string
        user_id: string | null
        type: string
        title: string
        body: string
        data?: Json
        status?: string
        created_at?: string
      }>
      content_packs: TableDef<{
        id: string
        external_product_id: string | null
        game_type: string
        title: string
        name?: string | null
        description: string
        content_url: string | null
        version: string
        is_free: boolean
        is_active: boolean
        is_bundled?: boolean
        item_count?: number | null
        items?: Json
        created_at: string
      }, {
        id?: string
        external_product_id?: string | null
        game_type: string
        title?: string
        name?: string | null
        description?: string
        content_url?: string | null
        version?: string
        is_free?: boolean
        is_active?: boolean
        is_bundled?: boolean
        item_count?: number | null
        items?: Json
        created_at?: string
      }>
      user_purchases: TableDef<{
        id: string
        user_id: string
        pack_id: string
        product_id: string | null
        receipt: Json | null
        created_at: string
      }, {
        id?: string
        user_id: string
        pack_id: string
        product_id?: string | null
        receipt?: Json | null
        created_at?: string
      }>
      role_assignments: TableDef<{
        id: string
        session_id: string
        participant_id: string
        role_id: string
        assigned_by: string
        created_at: string
      }, {
        id?: string
        session_id: string
        participant_id: string
        role_id: string
        assigned_by: string
        created_at?: string
      }>
    }
    Functions: {
      transition_session_state: {
        Args: {
          p_session_id: string
          p_expected_state: string
          p_new_state: string
          p_triggered_by: string
        }
        Returns: boolean
      }
    }
    Enums: Record<string, never>
    CompositeTypes: Record<string, never>
    Views: Record<string, never>
  }
}
